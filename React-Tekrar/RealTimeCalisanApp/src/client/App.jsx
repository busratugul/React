import React, { useState, useEffect } from 'react'
import './App.css'
import Palette from '../components/Palette'
import { init, subscribe } from '../SocketAPI.JSX'

function App() {
  const [activeColor, setActiveColor] = useState('#0a0a0a')
  useEffect(() => {
    init()
    subscribe((color) => setActiveColor(color))
  }, [])
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>
        <code>{activeColor}</code>
      </h1>
      <Palette activeColor={activeColor} />
    </div>
  )
}

export default App
