import { useState, useEffect } from 'react'
import type { ToolActivity } from '../types.js'
import type { OfficeState } from '../engine/officeState.js'
import type { SubagentCharacter } from '../../hooks/useExtensionMessages.js'
import { TILE_SIZE, CharacterState } from '../types.js'
import { TOOL_OVERLAY_VERTICAL_OFFSET, CHARACTER_SITTING_OFFSET_PX } from '../../constants.js'

interface ToolOverlayProps {
  officeState: OfficeState
  agents: number[]
  agentTools: Record<number, ToolActivity[]>
  subagentCharacters: SubagentCharacter[]
  containerRef: React.RefObject<HTMLDivElement | null>
  zoom: number
  panRef: React.RefObject<{ x: number; y: number }>
  onCloseAgent: (id: number) => void
}

/** Replace hyphens with spaces for display — "venue-researcher" → "venue researcher" */
function formatName(text: string): string {
  return text.replace(/-/g, ' ')
}

/** Get a more descriptive status for the agent */
function getAgentStatus(
  agentId: number,
  agentTools: Record<number, ToolActivity[]>,
  isActive: boolean,
): { status: string; detail: string; icon: string } {
  const tools = agentTools[agentId]
  if (tools && tools.length > 0) {
    // Find the latest non-done tool
    const activeTool = [...tools].reverse().find((t) => !t.done)
    if (activeTool) {
      if (activeTool.permissionWait) return { status: 'Waiting', detail: 'Needs your approval', icon: '⚠️' }
      // Map tool IDs to more readable descriptions
      const toolId = activeTool.toolId.toLowerCase()
      let action = activeTool.status
      if (toolId.includes('read') || toolId.includes('grep')) action = 'Reading files'
      else if (toolId.includes('write') || toolId.includes('edit')) action = 'Writing code'
      else if (toolId.includes('bash') || toolId.includes('run')) action = 'Running commands'
      else if (toolId.includes('task')) action = 'Delegating work'
      else if (toolId.includes('webfetch') || toolId.includes('websearch')) action = 'Researching'
      else if (toolId.includes('memory')) action = 'Using memory'
      return { status: 'Working', detail: action, icon: '⚡' }
    }
    // All tools done but agent still active (mid-turn)
    if (isActive) {
      const lastTool = tools[tools.length - 1]
      if (lastTool) return { status: 'Thinking', detail: lastTool.status, icon: '💭' }
    }
  }

  return { status: 'Idle', detail: 'Waiting for input', icon: '💤' }
}

/** Get role badge if we can infer from context */
function getRoleBadge(folderName: string | undefined): string | null {
  if (!folderName) return null
  const name = folderName.toLowerCase()
  if (name.includes('design') || name.includes('ui') || name.includes('ux')) return '🎨 Designer'
  if (name.includes('research') || name.includes('data')) return '🔬 Researcher'
  if (name.includes('pm') || name.includes('product')) return '📋 PM'
  if (name.includes('test') || name.includes('qa')) return '🧪 QA'
  return null
}

export function ToolOverlay({
  officeState,
  agents,
  agentTools,
  subagentCharacters,
  containerRef,
  zoom,
  panRef,
  onCloseAgent,
}: ToolOverlayProps) {
  const [, setTick] = useState(0)
  useEffect(() => {
    let rafId = 0
    const tick = () => {
      setTick((n) => n + 1)
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const el = containerRef.current
  if (!el) return null
  const rect = el.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1
  const canvasW = Math.round(rect.width * dpr)
  const canvasH = Math.round(rect.height * dpr)
  const layout = officeState.getLayout()
  const mapW = layout.cols * TILE_SIZE * zoom
  const mapH = layout.rows * TILE_SIZE * zoom
  const deviceOffsetX = Math.floor((canvasW - mapW) / 2) + Math.round(panRef.current.x)
  const deviceOffsetY = Math.floor((canvasH - mapH) / 2) + Math.round(panRef.current.y)

  const selectedId = officeState.selectedAgentId
  const hoveredId = officeState.hoveredAgentId

  // All character IDs
  const allIds = [...agents, ...subagentCharacters.map((s) => s.id)]

  return (
    <>
      {allIds.map((id) => {
        const ch = officeState.characters.get(id)
        if (!ch) return null

        const isSelected = selectedId === id
        const isHovered = hoveredId === id
        const isSub = ch.isSubagent

        // Only show for hovered or selected agents
        if (!isSelected && !isHovered) return null

        // Position above character
        const sittingOffset = ch.state === CharacterState.TYPE ? CHARACTER_SITTING_OFFSET_PX : 0
        const screenX = (deviceOffsetX + ch.x * zoom) / dpr
        const screenY = (deviceOffsetY + (ch.y + sittingOffset - TOOL_OVERLAY_VERTICAL_OFFSET) * zoom) / dpr

        // Get activity text
        const subHasPermission = isSub && ch.bubbleType === 'permission'
        let statusInfo: { status: string; detail: string; icon: string }
        let activityText: string

        if (isSub) {
          if (subHasPermission) {
            statusInfo = { status: 'Waiting', detail: 'Needs approval', icon: '⚠️' }
          } else {
            const sub = subagentCharacters.find((s) => s.id === id)
            statusInfo = { status: 'Subtask', detail: formatName(sub?.label || 'Working'), icon: '🔧' }
          }
          activityText = statusInfo.detail
        } else {
          statusInfo = getAgentStatus(id, agentTools, ch.isActive)
          activityText = `${statusInfo.icon} ${statusInfo.detail}`
        }

        // Get role badge
        const roleBadge = !isSub ? getRoleBadge(ch.folderName) : null

        // Determine dot color
        const tools = agentTools[id]
        const hasPermission = subHasPermission || tools?.some((t) => t.permissionWait && !t.done)
        const hasActiveTools = tools?.some((t) => !t.done)
        const isActive = ch.isActive

        let dotColor: string | null = null
        if (hasPermission) {
          dotColor = 'var(--pixel-status-permission)'
        } else if (isActive && hasActiveTools) {
          dotColor = 'var(--pixel-status-active)'
        }

        return (
          <div
            key={id}
            style={{
              position: 'absolute',
              left: screenX,
              top: screenY - 24,
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: isSelected ? 'auto' : 'none',
              zIndex: isSelected ? 'var(--pixel-overlay-selected-z)' : 'var(--pixel-overlay-z)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                background: 'rgba(10, 10, 20, 0.95)',
                border: isSelected
                  ? '2px solid var(--pixel-border-light)'
                  : '1px solid rgba(255,255,255,0.15)',
                borderRadius: 0,
                padding: isSelected ? '3px 6px 3px 8px' : '3px 8px',
                boxShadow: 'var(--pixel-shadow)',
                whiteSpace: 'nowrap',
                maxWidth: 220,
              }}
            >
              {dotColor && (
                <span
                  className={isActive && !hasPermission ? 'pixel-agents-pulse' : undefined}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: dotColor,
                    flexShrink: 0,
                  }}
                />
              )}
              <div style={{ overflow: 'hidden' }}>
                {/* Agent identity - show status icon and role badge */}
                <span style={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  color: isSub ? 'var(--pixel-text-dim)' : statusInfo.icon === '⚡' ? '#4CAF50' : statusInfo.icon === '💭' ? '#2196F3' : statusInfo.icon === '⚠️' ? '#FF5722' : 'var(--pixel-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  letterSpacing: '0.5px',
                }}>
                  <span>{statusInfo.icon}</span>
                  <span>{isSub ? 'Subtask' : statusInfo.status}</span>
                  {roleBadge && <span style={{ fontSize: '12px', opacity: 0.8, marginLeft: 4 }}>{roleBadge}</span>}
                </span>
                {/* Activity detail */}
                <span style={{
                  fontSize: '18px',
                  color: 'var(--vscode-foreground)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'block',
                }}>
                  {activityText}
                </span>
                {/* Project folder */}
                {ch.folderName && (
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--pixel-text-dim)',
                    display: 'block',
                    marginTop: 2,
                  }}>
                    📁 {formatName(ch.folderName)}
                  </span>
                )}
              </div>
              {isSelected && !isSub && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onCloseAgent(id)
                  }}
                  title="Close agent"
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--pixel-close-text)',
                    cursor: 'pointer',
                    padding: '0 2px',
                    fontSize: '26px',
                    lineHeight: 1,
                    marginLeft: 2,
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--pixel-close-hover)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--pixel-close-text)'
                  }}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
