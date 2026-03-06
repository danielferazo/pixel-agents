declare function acquireVsCodeApi(): { postMessage(msg: unknown): void }

// Auto-detect: VS Code webview vs standalone browser
const isVSCode = typeof window !== 'undefined' && typeof (window as unknown as Record<string, unknown>).acquireVsCodeApi === 'function'

let _vscode: { postMessage(msg: unknown): void }

if (isVSCode) {
  _vscode = acquireVsCodeApi()
} else {
  // Standalone mode — bridge via WebSocket
  const ws = new WebSocket(`ws://${window.location.host}`)
  const pending: unknown[] = []

  ws.addEventListener('message', (event) => {
    try {
      const msg = JSON.parse(event.data as string)
      window.dispatchEvent(new MessageEvent('message', { data: msg }))
    } catch { /* ignore malformed */ }
  })

  ws.addEventListener('open', () => {
    for (const msg of pending) ws.send(JSON.stringify(msg))
    pending.length = 0
  })

  _vscode = {
    postMessage(msg: unknown) {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(msg))
      } else {
        pending.push(msg)
      }
    },
  }
}

export const vscode = _vscode
