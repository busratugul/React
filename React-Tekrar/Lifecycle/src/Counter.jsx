import React, { useState, useEffect } from 'react'

function Counter() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('Busra')

  useEffect(() => {
    console.log('State Güncellendi')
  })

  useEffect(() => {
    console.log('component mount edildi.')
    const interval = setInterval(() => {
      setNumber((n) => n + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    console.log('Name statei güncellendi.')
  }, [name])
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <h1>{name}</h1>
      <button onClick={() => setName('Onur')}>Click</button>
    </div>
  )
}

export default Counter
