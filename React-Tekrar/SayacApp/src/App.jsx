import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Sayaç Uygulaması</h1>
      <h3>{count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrease
      </button>
    </div>
  )
}

export default App
