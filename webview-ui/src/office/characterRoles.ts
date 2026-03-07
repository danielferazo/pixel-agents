/**
 * Character role and mood definitions for enhanced character visuals.
 * Allows role-specific outfits and mood-based character expressions.
 */

// Role and mood types are used by renderer and state

// Agent roles - determines outfit style
export const AgentRole = {
  ENGINEER: 'engineer',
  DESIGNER: 'designer',
  PM: 'pm',
  QA: 'qa',
  RESEARCHER: 'researcher',
  GENERAL: 'general',
} as const
export type AgentRole = typeof AgentRole[keyof typeof AgentRole]

// Mood states - affects character expression and color tint
export const AgentMood = {
  HAPPY: 'happy',
  NEUTRAL: 'neutral',
  STRESSED: 'stressed',
  CELEBRATING: 'celebrating',
  THINKING: 'thinking',
  CONFUSED: 'confused',
} as const
export type AgentMood = typeof AgentMood[keyof typeof AgentMood]

// Role-based outfit color overrides
// These are applied as hue shifts or tints on top of the base palette
export interface RoleOutfit {
  id: AgentRole
  name: string
  shirtColor: string      // Primary shirt color
  accentColor: string     // Secondary accent (tie, badge, etc.)
  description: string
}

// Role outfit definitions
export const ROLE_OUTFITS: Record<AgentRole, RoleOutfit> = {
  [AgentRole.ENGINEER]: {
    id: AgentRole.ENGINEER,
    name: 'Engineer',
    shirtColor: '#2E7D32',  // Dark green - coding/tech
    accentColor: '#1B5E20',
    description: 'Technical developer',
  },
  [AgentRole.DESIGNER]: {
    id: AgentRole.DESIGNER,
    name: 'Designer',
    shirtColor: '#7B1FA2',  // Purple - creative
    accentColor: '#4A148C',
    description: 'Creative designer',
  },
  [AgentRole.PM]: {
    id: AgentRole.PM,
    name: 'PM',
    shirtColor: '#1565C0',  // Blue - professional/management
    accentColor: '#0D47A1',
    description: 'Product manager',
  },
  [AgentRole.QA]: {
    id: AgentRole.QA,
    name: 'QA',
    shirtColor: '#F57C00',  // Orange - attention to detail
    accentColor: '#E65100',
    description: 'Quality assurance',
  },
  [AgentRole.RESEARCHER]: {
    id: AgentRole.RESEARCHER,
    name: 'Researcher',
    shirtColor: '#00838F',  // Teal - analytical
    accentColor: '#006064',
    description: 'Research & analysis',
  },
  [AgentRole.GENERAL]: {
    id: AgentRole.GENERAL,
    name: 'General',
    shirtColor: '#455A64',  // Gray - neutral
    accentColor: '#37474F',
    description: 'General purpose',
  },
}

// Mood color tints - applied as a tint overlay
export const MOOD_TINTS: Record<AgentMood, string | null> = {
  [AgentMood.HAPPY]: '#4CAF50',      // Green tint - happy
  [AgentMood.NEUTRAL]: null,          // No tint
  [AgentMood.STRESSED]: '#FF5722',   // Red/orange tint - stressed
  [AgentMood.CELEBRATING]: '#FFEB3B', // Yellow tint - celebrating
  [AgentMood.THINKING]: '#2196F3',   // Blue tint - thinking
  [AgentMood.CONFUSED]: '#9C27B0',   // Purple tint - confused
}

// Mood emoji for speech bubbles
export const MOOD_ICONS: Record<AgentMood, string> = {
  [AgentMood.HAPPY]: '😊',
  [AgentMood.NEUTRAL]: '😐',
  [AgentMood.STRESSED]: '😰',
  [AgentMood.CELEBRATING]: '🎉',
  [AgentMood.THINKING]: '🤔',
  [AgentMood.CONFUSED]: '😕',
}

// Extended character palettes for roles - more vibrant colors than default
export const ROLE_PALETTES: Record<AgentRole, Array<{ skin: string, shirt: string, pants: string, hair: string, shoes: string }>> = {
  [AgentRole.ENGINEER]: [
    { skin: '#FFCC99', shirt: '#2E7D32', pants: '#1B5E20', hair: '#553322', shoes: '#222222' },
    { skin: '#DEB887', shirt: '#388E3C', pants: '#2E7D32', hair: '#222222', shoes: '#333333' },
  ],
  [AgentRole.DESIGNER]: [
    { skin: '#FFCC99', shirt: '#7B1FA2', pants: '#4A148C', hair: '#AA4422', shoes: '#222222' },
    { skin: '#FFEFD5', shirt: '#9C27B0', pants: '#7B1FA2', hair: '#8B4513', shoes: '#333333' },
  ],
  [AgentRole.PM]: [
    { skin: '#FFCC99', shirt: '#1565C0', pants: '#0D47A1', hair: '#553322', shoes: '#222222' },
    { skin: '#DEB887', shirt: '#1976D2', pants: '#1565C0', hair: '#222222', shoes: '#333333' },
  ],
  [AgentRole.QA]: [
    { skin: '#FFCC99', shirt: '#F57C00', pants: '#E65100', hair: '#553322', shoes: '#222222' },
    { skin: '#DEB887', shirt: '#FF9800', pants: '#F57C00', hair: '#444444', shoes: '#333333' },
  ],
  [AgentRole.RESEARCHER]: [
    { skin: '#FFCC99', shirt: '#00838F', pants: '#006064', hair: '#333333', shoes: '#222222' },
    { skin: '#E0F7FA', shirt: '#00ACC1', pants: '#00838F', hair: '#5D4037', shoes: '#333333' },
  ],
  [AgentRole.GENERAL]: [
    { skin: '#FFCC99', shirt: '#455A64', pants: '#37474F', hair: '#553322', shoes: '#222222' },
    { skin: '#DEB887', shirt: '#607D8B', pants: '#455A64', hair: '#222222', shoes: '#333333' },
  ],
}

// Helper to get palette for a role
export function getRolePalette(role: AgentRole, variant: number = 0): { skin: string, shirt: string, pants: string, hair: string, shoes: string } {
  const palettes = ROLE_PALETTES[role]
  return palettes[variant % palettes.length]
}

// Role assignment based on agent name/behavior (simple heuristic)
export function inferRoleFromAgent(agentLabel: string): AgentRole {
  const label = agentLabel.toLowerCase()
  if (label.includes('engineer') || label.includes('dev') || label.includes('code')) {
    return AgentRole.ENGINEER
  }
  if (label.includes('design') || label.includes('ui') || label.includes('ux')) {
    return AgentRole.DESIGNER
  }
  if (label.includes('pm') || label.includes('product') || label.includes('manage')) {
    return AgentRole.PM
  }
  if (label.includes('qa') || label.includes('test') || label.includes('quality')) {
    return AgentRole.QA
  }
  if (label.includes('research') || label.includes('data') || label.includes('analyst')) {
    return AgentRole.RESEARCHER
  }
  return AgentRole.GENERAL
}
