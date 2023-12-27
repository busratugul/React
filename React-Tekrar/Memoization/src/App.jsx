import React, { useMemo, useState, useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import Callback from './components/Callback'

function App() {
  const [number, setNumber] = useState(0)
  const [text, settText] = useState('')

  //const data = { name: 'Busra' }

  /* const data = useMemo(() => {
    return [ { name: 'Busra', number} ]
  }, [number]) */

  const data = useMemo(() => {
    return calculateObject()
  }, [])

  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1)
  }, [])

  return (
    <div>
      {/* <Header
        //number = { number < 5 ? 0 : number}
        data={data}
      />  */}
      <Callback increment={increment} />
      <hr />
      <h1>{number}</h1>
      {/* <button onClick={() => setNumber(number + 1)}>Click</button> */}
    </div>
  )
}

function calculateObject() {
  return { name: 'Busra' }
}

export default App
