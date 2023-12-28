import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Header() {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <h2>Active Theme : {theme}</h2>
    </div>
  )
}

export default Header
