import { useState } from 'react'
import { vscode } from '../vscodeApi.js'
import { isSoundEnabled, setSoundEnabled } from '../notificationSound.js'
import { THEME_LIST, getCurrentThemeId, setTheme } from '../office/theme.js'
import { WeatherType, getWeather, setWeather } from '../office/weather.js'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  isDebugMode: boolean
  onToggleDebugMode: () => void
}

const menuItemBase: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '6px 10px',
  fontSize: '24px',
  color: 'rgba(255, 255, 255, 0.8)',
  background: 'transparent',
  border: 'none',
  borderRadius: 0,
  cursor: 'pointer',
  textAlign: 'left',
}

export function SettingsModal({ isOpen, onClose, isDebugMode, onToggleDebugMode }: SettingsModalProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [soundLocal, setSoundLocal] = useState(isSoundEnabled)
  const [currentTheme, setCurrentTheme] = useState(getCurrentThemeId())
  const [showThemeDropdown, setShowThemeDropdown] = useState(false)
  const [currentWeather, setCurrentWeather] = useState(getWeather())
  const [showWeatherDropdown, setShowWeatherDropdown] = useState(false)

  const weatherOptions = [
    { type: WeatherType.CLEAR, name: 'Clear', icon: '' },
    { type: WeatherType.RAIN, name: 'Rain', icon: '' },
    { type: WeatherType.SNOW, name: 'Snow', icon: '' },
    { type: WeatherType.STORM, name: 'Storm', icon: '' },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Dark backdrop — click to close */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 49,
        }}
      />
      {/* Centered modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 50,
          background: 'var(--pixel-bg)',
          border: '2px solid var(--pixel-border)',
          borderRadius: 0,
          padding: '4px',
          boxShadow: 'var(--pixel-shadow)',
          minWidth: 200,
        }}
      >
        {/* Header with title and X button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '4px 10px',
            borderBottom: '1px solid var(--pixel-border)',
            marginBottom: '4px',
          }}
        >
          <span style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.9)' }}>Settings</span>
          <button
            onClick={onClose}
            onMouseEnter={() => setHovered('close')}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === 'close' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              border: 'none',
              borderRadius: 0,
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '0 4px',
              lineHeight: 1,
            }}
          >
            X
          </button>
        </div>
        {/* Menu items */}
        <button
          onClick={() => {
            vscode.postMessage({ type: 'openSessionsFolder' })
            onClose()
          }}
          onMouseEnter={() => setHovered('sessions')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...menuItemBase,
            background: hovered === 'sessions' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          }}
        >
          Open Sessions Folder
        </button>
        <button
          onClick={() => {
            vscode.postMessage({ type: 'exportLayout' })
            onClose()
          }}
          onMouseEnter={() => setHovered('export')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...menuItemBase,
            background: hovered === 'export' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          }}
        >
          Export Layout
        </button>
        <button
          onClick={() => {
            vscode.postMessage({ type: 'importLayout' })
            onClose()
          }}
          onMouseEnter={() => setHovered('import')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...menuItemBase,
            background: hovered === 'import' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          }}
        >
          Import Layout
        </button>
        <button
          onClick={() => {
            const newVal = !isSoundEnabled()
            setSoundEnabled(newVal)
            setSoundLocal(newVal)
            vscode.postMessage({ type: 'setSoundEnabled', enabled: newVal })
          }}
          onMouseEnter={() => setHovered('sound')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...menuItemBase,
            background: hovered === 'sound' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          }}
        >
          <span>Sound Notifications</span>
          <span
            style={{
              width: 14,
              height: 14,
              border: '2px solid rgba(255, 255, 255, 0.5)',
              borderRadius: 0,
              background: soundLocal ? 'rgba(90, 140, 255, 0.8)' : 'transparent',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              lineHeight: 1,
              color: '#fff',
            }}
          >
            {soundLocal ? 'X' : ''}
          </span>
        </button>
        {/* Theme selector */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
            onMouseEnter={() => setHovered('theme')}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...menuItemBase,
              background: hovered === 'theme' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
            }}
          >
            <span>Theme</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '16px' }}>
              {THEME_LIST.find(t => t.id === currentTheme)?.name || 'Studio Noir'}
            </span>
          </button>
          {showThemeDropdown && (
            <div
              style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                background: 'var(--pixel-bg)',
                border: '2px solid var(--pixel-border)',
                minWidth: 180,
                zIndex: 51,
              }}
            >
              {THEME_LIST.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id)
                    setCurrentTheme(theme.id)
                    setShowThemeDropdown(false)
                    vscode.postMessage({ type: 'setTheme', themeId: theme.id })
                    // Force re-render by reloading the page (simplest approach for now)
                    window.location.reload()
                  }}
                  style={{
                    ...menuItemBase,
                    padding: '8px 12px',
                    fontSize: '18px',
                    background: currentTheme === theme.id ? 'rgba(90, 140, 255, 0.2)' : 'transparent',
                  }}
                >
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Weather selector */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowWeatherDropdown(!showWeatherDropdown)}
            onMouseEnter={() => setHovered('weather')}
            onMouseLeave={() => setHovered(null)}
            style={{
              ...menuItemBase,
              background: hovered === 'weather' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
            }}
          >
            <span>Weather</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '16px' }}>
              {weatherOptions.find(w => w.type === currentWeather)?.name || 'Clear'}
            </span>
          </button>
          {showWeatherDropdown && (
            <div
              style={{
                position: 'absolute',
                left: '100%',
                top: 0,
                background: 'var(--pixel-bg)',
                border: '2px solid var(--pixel-border)',
                minWidth: 140,
                zIndex: 51,
              }}
            >
              {weatherOptions.map(weather => (
                <button
                  key={weather.type}
                  onClick={() => {
                    setWeather(weather.type)
                    setCurrentWeather(weather.type)
                    setShowWeatherDropdown(false)
                  }}
                  style={{
                    ...menuItemBase,
                    padding: '8px 12px',
                    fontSize: '18px',
                    background: currentWeather === weather.type ? 'rgba(90, 140, 255, 0.2)' : 'transparent',
                  }}
                >
                  <span>{weather.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={onToggleDebugMode}
          onMouseEnter={() => setHovered('debug')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...menuItemBase,
            background: hovered === 'debug' ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          }}
        >
          <span>Debug View</span>
          {isDebugMode && (
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'rgba(90, 140, 255, 0.8)',
                flexShrink: 0,
              }}
            />
          )}
        </button>
      </div>
    </>
  )
}
