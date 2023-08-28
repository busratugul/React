import { useState,useEffect } from "react"
import "./App.css"


function App() {
  const [busra, setbusra] = useState(0)
  const [onur, setonur] = useState(0)

  useEffect(() => {
  console.log("ilk render edilince çalışmaz daha da çalışmaz");
  },[])

  useEffect(() => {
    console.log("Her zaman çalışır")
  
  })

  useEffect(() => {
    console.log("İlk render da ve busra değiştiğinde çalışır");
  },[busra])

  useEffect(() => {
    console.log("İlk render da ve onur değiştiğinde çalışır");
  },[onur])

  useEffect(() => {
    console.log("İlk render da ve onur veya busra değiştiğinde çalışır");
  },[onur,busra])
  
  return (
  <div className="App">
    <div className="Busra">
      <button onClick={() => setbusra(busra+1)}>Busra ++ </button>
      <div>Busra: {busra}</div>
    </div>
    <div className="Onur">
      <button onClick={() => setonur(onur+1)}>Onur ++ </button>
      <div>Onur: {onur}</div>
    </div>
  </div>
  )
}

export default App
