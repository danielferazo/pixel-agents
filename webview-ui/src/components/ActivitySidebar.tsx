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

function getToolIcon(toolId: string): string {
  const name = toolId.toLowerCase()
  if (name.includes('write') || name.includes('edit')) return '✏️'
  if (name.includes('read') || name.includes('grep') || name.includes('glob')) return '📖'
  if (name.includes('bash') || name.includes('shell') || name.includes('cmd')) return '💻'
  if (name.includes('web') || name.includes('fetch') || name.includes('search')) return '🌐'
  if (name.includes('task')) return '🤖'
  if (name.includes('memory')) return '🧠'
  if (name.includes('file')) return '📁'
  return '🔧'
}

function ActivityItem({ tool }: { tool: ToolActivity }) {
  const icon = getToolIcon(tool.toolId || '')
  const statusColor = tool.done
    ? '#89d185'
    : tool.permissionWait
      ? '#cca700'
      : '#3794ff'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 8px',
        background: tool.done ? 'transparent' : 'rgba(55, 148, 255, 0.1)',
        borderRadius: 4,
        opacity: tool.done ? 0.6 : 1,
      }}
    >
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span
        style={{
          flex: 1,
          fontSize: 11,
          color: 'var(--pixel-text-dim)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {tool.status || tool.toolId || 'Unknown'}
      </span>
      <span
        style={{
          width: 6,
          height: 6,
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
  const sidebarStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: isOpen ? 220 : 0,
    height: '100%',
    background: 'var(--pixel-panel-bg)',
    borderLeft: isOpen ? '2px solid var(--pixel-border)' : 'none',
    zIndex: 45,
    transition: 'width 0.2s ease',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  }

  const headerStyle: React.CSSProperties = {
    padding: '8px 12px',
    borderBottom: '2px solid var(--pixel-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
  }

  const toggleBtnStyle: React.CSSProperties = {
    background: 'var(--pixel-btn-bg)',
    border: '2px solid var(--pixel-border)',
    color: 'var(--pixel-text)',
    padding: '4px 8px',
    cursor: 'pointer',
    fontSize: 14,
    borderRadius: 0,
  }

  // Get agent name from tools (use first tool's name as fallback)
  const getAgentName = (id: number): string => {
    const tools = agentTools[id]
    if (tools && tools.length > 0) {
      // Use the first incomplete tool's name, or the first tool's name
      const activeTool = tools.find(t => !t.done)
      if (activeTool?.toolId) {
        return activeTool.toolId
      }
      if (tools[0]?.toolId) {
        return tools[0].toolId
      }
    }
    return `Agent ${id}`
  }

  return (
    <>
      {/* Toggle button (always visible) */}
      <button
        onClick={onToggle}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 50,
          ...toggleBtnStyle,
          background: isOpen ? 'var(--pixel-accent)' : 'var(--pixel-btn-bg)',
        }}
        title={isOpen ? 'Close activity feed' : 'Open activity feed'}
      >
        {isOpen ? '◀' : '📋'}
      </button>

      <div style={sidebarStyle}>
        <div style={headerStyle}>
          <span style={{ fontSize: 12, fontWeight: 'bold', color: 'var(--pixel-text)' }}>
            Activity Feed
          </span>
          <span style={{ fontSize: 10, color: 'var(--pixel-text-dim)' }}>
            {agentIds.length} agent{agentIds.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 8,
          }}
        >
          {agentIds.length === 0 ? (
            <div style={{ color: 'var(--pixel-text-dim)', fontSize: 11, textAlign: 'center', padding: 20 }}>
              No active agents
            </div>
          ) : (
            agentIds.map((id) => {
              const tools = agentTools[id] || []
              const status = agentStatuses[id] || 'active'
              const name = getAgentName(id)

              return (
                <div
                  key={id}
                  style={{
                    marginBottom: 12,
                    background: 'var(--pixel-bg)',
                    border: '2px solid var(--pixel-border)',
                    borderRadius: 0,
                  }}
                >
                  <div
                    onClick={() => onSelectAgent(id)}
                    style={{
                      padding: '6px 8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background:
                        status === 'waiting'
                          ? 'rgba(204, 167, 0, 0.2)'
                          : status === 'permission'
                            ? 'rgba(255, 100, 100, 0.2)'
                            : 'transparent',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background:
                            status === 'waiting'
                              ? '#cca700'
                              : status === 'permission'
                                ? '#cca700'
                                : '#89d185',
                        }}
                      />
                      <span style={{ fontSize: 11, fontWeight: 'bold', color: 'var(--pixel-text)' }}>
                        {name}
                      </span>
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
                        fontSize: 12,
                        padding: 0,
                      }}
                      title="Close agent"
                    >
                      ✕
                    </button>
                  </div>

                  {tools.length > 0 && (
                    <div style={{ padding: 4 }}>
                      {tools.slice(-5).map((tool, i) => (
                        <ActivityItem key={i} tool={tool} />
                      ))}
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}
