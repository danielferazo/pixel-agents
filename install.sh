#!/usr/bin/env bash
# Pixel Agents — One-Command Install
# Sets up the always-on visualization server at localhost:7890
# Usage: bash install.sh

set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=7890
PLIST_LABEL="com.jarvis.pixel-agents"
PLIST_PATH="$HOME/Library/LaunchAgents/${PLIST_LABEL}.plist"
LOG_DIR="$HOME/.claude/logs"

# ── Colors ────────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
RESET='\033[0m'

ok()   { echo -e "${GREEN}  ✓${RESET} $1"; }
info() { echo -e "${BLUE}  →${RESET} $1"; }
warn() { echo -e "${YELLOW}  !${RESET} $1"; }
fail() { echo -e "${RED}  ✗${RESET} $1"; exit 1; }

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BLUE}  Pixel Agents — Install${RESET}"
echo -e "${BLUE}  Always-on visualization server at localhost:${PORT}${RESET}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""

# ── 1. Detect Node.js ─────────────────────────────────────────────────────────
info "Detecting Node.js..."

NODE_BIN=""

# Check common locations in priority order
for candidate in \
    "$(which node 2>/dev/null)" \
    "$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node 2>/dev/null | sort -V | tail -1)/bin/node" \
    "/opt/homebrew/bin/node" \
    "/usr/local/bin/node" \
    "/usr/bin/node"
do
    if [[ -x "$candidate" ]]; then
        NODE_BIN="$candidate"
        break
    fi
done

[[ -z "$NODE_BIN" ]] && fail "Node.js not found. Install it from https://nodejs.org and re-run."

NODE_VERSION=$("$NODE_BIN" --version)
ok "Node.js found: $NODE_BIN ($NODE_VERSION)"

# Resolve the bin directory for PATH
NODE_BIN_DIR="$(dirname "$NODE_BIN")"

# ── 2. Install dependencies ───────────────────────────────────────────────────
info "Installing root dependencies..."
cd "$REPO_DIR"
"$NODE_BIN_DIR/npm" install --silent
ok "Root dependencies installed"

info "Installing standalone dependencies..."
cd "$REPO_DIR/standalone"
"$NODE_BIN_DIR/npm" install --silent
cd "$REPO_DIR"
ok "Standalone dependencies installed"

info "Installing webview dependencies..."
cd "$REPO_DIR/webview-ui"
"$NODE_BIN_DIR/npm" install --silent
cd "$REPO_DIR"
ok "Webview dependencies installed"

# ── 3. Build ──────────────────────────────────────────────────────────────────
info "Building webview UI..."
cd "$REPO_DIR/webview-ui"
"$NODE_BIN_DIR/npm" run build --silent
cd "$REPO_DIR"

DIST_DIR="$REPO_DIR/dist/webview"
[[ -d "$DIST_DIR" ]] || fail "Build failed — dist/webview not found."
ok "Build complete"

# ── 4. Create log directory ───────────────────────────────────────────────────
mkdir -p "$LOG_DIR"
ok "Log directory ready ($LOG_DIR)"

# ── 5. Write LaunchAgent plist ────────────────────────────────────────────────
info "Writing LaunchAgent..."
mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST_PATH" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>${PLIST_LABEL}</string>

    <key>ProgramArguments</key>
    <array>
        <string>${NODE_BIN}</string>
        <string>${REPO_DIR}/standalone/server.js</string>
    </array>

    <key>WorkingDirectory</key>
    <string>${REPO_DIR}</string>

    <key>EnvironmentVariables</key>
    <dict>
        <key>PORT</key>
        <string>${PORT}</string>
        <key>HOME</key>
        <string>${HOME}</string>
        <key>PATH</key>
        <string>${NODE_BIN_DIR}:/usr/local/bin:/usr/bin:/bin</string>
    </dict>

    <key>RunAtLoad</key>
    <true/>

    <key>KeepAlive</key>
    <true/>

    <key>StandardOutPath</key>
    <string>${LOG_DIR}/pixel-agents.log</string>
    <key>StandardErrorPath</key>
    <string>${LOG_DIR}/pixel-agents-error.log</string>
</dict>
</plist>
PLIST

ok "LaunchAgent written to $PLIST_PATH"

# ── 6. Load (or reload) the agent ────────────────────────────────────────────
info "Starting service..."

# Unload first if already loaded (reinstall case)
launchctl unload "$PLIST_PATH" 2>/dev/null || true

launchctl load "$PLIST_PATH"

# Wait for server to come up (up to 10s)
ATTEMPTS=0
until curl -s -o /dev/null -w "%{http_code}" "http://localhost:${PORT}" 2>/dev/null | grep -q "200"; do
    ATTEMPTS=$((ATTEMPTS + 1))
    if [[ $ATTEMPTS -ge 20 ]]; then
        warn "Server didn't respond in time. Check logs: $LOG_DIR/pixel-agents-error.log"
        break
    fi
    sleep 0.5
done

if [[ $ATTEMPTS -lt 20 ]]; then
    ok "Server is running at http://localhost:${PORT}"
fi

# ── 7. Open browser ───────────────────────────────────────────────────────────
info "Opening browser..."
open "http://localhost:${PORT}" 2>/dev/null || true

# ── Done ──────────────────────────────────────────────────────────────────────
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${GREEN}  ✓ Pixel Agents is running at localhost:${PORT}${RESET}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
echo "  Auto-starts on login. Restarts automatically if it crashes."
echo ""
echo "  Manage:"
echo "    Stop:     launchctl unload ~/Library/LaunchAgents/${PLIST_LABEL}.plist"
echo "    Start:    launchctl load   ~/Library/LaunchAgents/${PLIST_LABEL}.plist"
echo "    Logs:     tail -f ${LOG_DIR}/pixel-agents.log"
echo ""
