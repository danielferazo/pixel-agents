# Pixel Agents — Product Roadmap

> **Owner:** CTO
> **Vision:** The definitive real-time visualization layer for human-AI collaboration — see every agent, every task, every project, at a glance.

---

## Shipped ✅

### v1.0 — Core VS Code Extension
- Pixel art office with animated agent characters
- Real-time tool activity display via JSONL transcript watching
- Agent spawn/despawn matrix effect
- Layout editor (floor, walls, furniture)
- Sound notifications on turn completion

### v1.0.2 — Standalone Mode
- `standalone/server.js` — run without VS Code at all
- Express + WebSocket server, browser-based UI
- Watches `~/.claude/projects/` globally across all project directories

### Reliability + UX Fixes (in fork)
- **Multi-project scanning:** each project directory gets its own independent scan timer — no more agents missed when working across multiple projects simultaneously
- **Panel visibility recovery:** agents catch up on missed events when the panel reopens
- **Skill name formatting:** hyphens stripped from character labels (`venue researcher` instead of `venue-researcher`)

---

## In Progress 🚧

### Always-On Local Dashboard
- LaunchAgent configured at `~/Library/LaunchAgents/com.jarvis.pixel-agents.plist`
- Pixel agents server auto-starts on login, restarts on crash
- Dedicated port **7890** — one permanent browser tab, all agents across all projects
- Logs to `~/.claude/logs/pixel-agents.log`
- **`install.sh`** — one-command setup: detects Node (nvm/homebrew/system), installs deps, builds webview, writes LaunchAgent with correct paths, starts service, opens browser

---

## Planned 📋

### Better Agent Identity
- Show the actual Jarvis skill name on the character label (e.g. `venue-researcher`, `cto`, `qa-auditor`)
- Show which project each agent is working on beneath the skill name
- Color-code characters by project so multi-project sessions are immediately readable

### Richer Activity Display
- Show sub-task hierarchy — which agents spawned which sub-agents
- Progress indicator for long-running tools (Bash, WebSearch, Task)
- Distinguish tool types visually: reading vs writing vs browsing vs calling APIs

### Dashboard Panel (Browser)
- Sidebar alongside the office view listing all active agents with status
- Click an agent in the list → camera follows that character
- Filter by project, by status (active / waiting / idle)

### Notifications
- Browser desktop notification when an agent needs approval (permission bubble)
- Optional Slack bridge: post to a channel when an agent completes a turn or hits a blocker

### Mobile View
- Responsive layout for monitoring from phone or tablet
- Simplified list view (no canvas) for small screens — just agent names, status, current tool

---

## Ideas / Backlog 💡

- **Named sessions** — give terminals human-readable names that show up on characters instead of agent IDs
- **Replay mode** — scrub through a completed session's JSONL and watch the office replay what happened
- **Multi-machine** — expose the WebSocket server over a local network so the dashboard is viewable from any device on the same WiFi
- **Theme support** — dark/light/custom pixel art palettes for the office environment
- **Agent stats** — track tokens used, turns completed, tools called per agent session
