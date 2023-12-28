import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button({ children }) {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div>
      Button Componenti {children}
      <button onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
        Change Theme
      </button>
    </div>
  )
}

export default Button
