import { useState,useMemo } from "react"


function App() {
const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)
const doubleNumber = useMemo(() => {
  return slowFunc(number)
},[number])

const theme = {
  backgroundColor : dark ? '#333' : '#FFF',
  color : dark ? '#fff' : '#333'
}

  return (
   <div>
    <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark((prevDark) => !prevDark)}>Temayı Değiştir</button>
    <div style={theme}>{doubleNumber}</div>
   </div>
  )
}

function slowFunc(num) {
  console.log("Fonksiyon Çağırıldı")
  for (let i = 0; i < 1000000000; i++) {
    return num * 2 
  }
}

export default App
