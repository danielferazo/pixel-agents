import type { ToolActivity } from '../office/types.js'

interface ActivitySidebarProps {
  agentIds: number[]
  agentTools: Record<number, ToolActivity[]>
  agentStatuses: Record<number, string>
  isOpen: boolean
  onToggle: () => void
  onSelectAgent: (id: number) => void
  onCloseAgent: (id: number) => void
}

// Status → { color, label, bg }
const STATUS_META: Record<string, { color: string; label: string; bg: string }> = {
  active:     { color: '#5ac88c', label: 'Working',    bg: 'rgba(90, 200, 140, 0.08)' },
  waiting:    { color: '#cca700', label: 'Waiting',    bg: 'rgba(204, 167, 0, 0.12)'  },
  permission: { color: '#e55555', label: 'Needs OK',   bg: 'rgba(229, 85, 85, 0.12)'  },
  idle:       { color: '#6a6a8a', label: 'Idle',       bg: 'transparent'              },
}

function getStatusMeta(status: string) {
  return STATUS_META[status] ?? STATUS_META['idle']
}

function getToolIcon(toolId: string): string {
  const name = toolId.toLowerCase()
  if (name.includes('write') || name.includes('edit')) return '✏'
  if (name.includes('read') || name.includes('grep') || name.includes('glob')) return '◉'
  if (name.includes('bash') || name.includes('shell') || name.includes('cmd')) return '▶'
  if (name.includes('web') || name.includes('fetch') || name.includes('search')) return '⊕'
  if (name.includes('task')) return '◈'
  if (name.includes('memory')) return '◆'
  if (name.includes('file')) return '▣'
  return '○'
}

function ActivityItem({ tool }: { tool: ToolActivity }) {
  const icon = getToolIcon(tool.toolId || '')
  const statusColor = tool.done
    ? '#5a5a7a'
    : tool.permissionWait
      ? '#e55555'
      : '#5ac88c'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 8px',
        background: tool.done ? 'transparent' : 'rgba(90, 200, 140, 0.07)',
        opacity: tool.done ? 0.5 : 1,
        borderBottom: '1px solid rgba(255,255,255,0.03)',
      }}
    >
      <span style={{ fontSize: 10, color: statusColor, flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          flex: 1,
          fontSize: 10,
          color: 'var(--pixel-text-dim)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontFamily: 'inherit',
        }}
      >
        {tool.status || tool.toolId || 'Unknown'}
      </span>
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: statusColor,
          flexShrink: 0,
        }}
      />
    </div>
  )
}

export function ActivitySidebar({
  agentIds,
  agentTools,
  agentStatuses,
  isOpen,
  onToggle,
  onSelectAgent,
  onCloseAgent,
}: ActivitySidebarProps) {
  // Compute org health summary
  const statusCounts = agentIds.reduce(
    (acc, id) => {
      const s = agentStatuses[id] || 'idle'
      acc[s] = (acc[s] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const sidebarStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: isOpen ? 228 : 0,
    height: '100%',
    background: 'rgba(14, 14, 22, 0.97)',
    borderLeft: isOpen ? '2px solid var(--pixel-border)' : 'none',
    zIndex: 45,
    transition: 'width 0.2s ease',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 50,
          background: isOpen ? 'var(--pixel-accent)' : 'var(--pixel-btn-bg)',
          border: '2px solid var(--pixel-border)',
          color: 'var(--pixel-text)',
          padding: '4px 8px',
          cursor: 'pointer',
          fontSize: 12,
          borderRadius: 0,
        }}
        title={isOpen ? 'Close activity feed' : 'Open activity feed'}
      >
        {isOpen ? '◀' : '≡'}
      </button>

      <div style={sidebarStyle}>
        {/* Header */}
        <div
          style={{
            padding: '8px 12px',
            borderBottom: '2px solid var(--pixel-border)',
            flexShrink: 0,
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 'bold', color: 'var(--pixel-text)', letterSpacing: 1 }}>
              JARVIS TEAM
            </span>
            <span style={{ fontSize: 10, color: 'var(--pixel-text-dim)' }}>
              {agentIds.length} agent{agentIds.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Agent list */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '6px 6px',
          }}
        >
          {agentIds.length === 0 ? (
            <div
              style={{
                color: 'var(--pixel-text-dim)',
                fontSize: 10,
                textAlign: 'center',
                padding: '24px 8px',
                lineHeight: 1.6,
              }}
            >
              No agents yet.{'\n'}
              <span style={{ color: 'var(--pixel-accent)' }}>+ Agent</span> to spawn one.
            </div>
          ) : (
            agentIds.map((id) => {
              const tools = agentTools[id] || []
              const rawStatus = agentStatuses[id] || 'idle'
              const meta = getStatusMeta(rawStatus)
              const activeTool = tools.find(t => !t.done)

              // Label: active tool status, or status label
              let label = meta.label
              if (activeTool?.status) {
                const s = activeTool.status
                label = s.length > 22 ? s.substring(0, 20) + '…' : s
              }

              return (
                <div
                  key={id}
                  style={{
                    marginBottom: 8,
                    background: meta.bg,
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderLeft: `3px solid ${meta.color}`,
                    borderRadius: 0,
                  }}
                >
                  {/* Agent card header */}
                  <div
                    onClick={() => onSelectAgent(id)}
                    style={{
                      padding: '5px 8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                      {/* Status dot */}
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: '50%',
                          background: meta.color,
                          flexShrink: 0,
                          boxShadow: `0 0 4px ${meta.color}`,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div style={{
                          fontSize: 9,
                          fontWeight: 'bold',
                          color: id < 0 ? 'var(--pixel-text-dim)' : 'var(--pixel-accent)',
                          letterSpacing: 0.5,
                          textTransform: 'uppercase',
                        }}>
                          {id < 0 ? `Subtask #${Math.abs(id)}` : `Agent #${id}`}
                        </div>
                        <div style={{
                          fontSize: 10,
                          color: 'var(--pixel-text)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: 130,
                        }}>
                          {label}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onCloseAgent(id)
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--pixel-text-dim)',
                        cursor: 'pointer',
                        fontSize: 11,
                        padding: '0 2px',
                        flexShrink: 0,
                      }}
                      title="Close agent"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Tool activity list */}
                  {tools.length > 0 && (
                    <div>
                      {tools.slice(-4).map((tool, i) => (
                        <ActivityItem key={i} tool={tool} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Org health summary bar at the bottom */}
        {agentIds.length > 0 && (
          <div
            style={{
              padding: '6px 10px',
              borderTop: '2px solid var(--pixel-border)',
              background: 'rgba(0,0,0,0.3)',
              flexShrink: 0,
              display: 'flex',
              gap: 12,
              fontSize: 9,
              letterSpacing: 0.5,
            }}
          >
            {(statusCounts['active'] ?? 0) > 0 && (
              <span style={{ color: '#5ac88c' }}>● {statusCounts['active']} working</span>
            )}
            {(statusCounts['waiting'] ?? 0) > 0 && (
              <span style={{ color: '#cca700' }}>● {statusCounts['waiting']} waiting</span>
            )}
            {(statusCounts['permission'] ?? 0) > 0 && (
              <span style={{ color: '#e55555' }}>● {statusCounts['permission']} needs ok</span>
            )}
            {(statusCounts['idle'] ?? 0) > 0 && (
              <span style={{ color: '#6a6a8a' }}>● {statusCounts['idle']} idle</span>
            )}
          </div>
        )}
      </div>
    </>
  )
}
