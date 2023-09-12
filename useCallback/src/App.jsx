import { useState, useCallback } from "react"
import NumberList from "./NumberList"


function App() {
const [number, setNumber] = useState(0)
const [dark, setDark] = useState(false)

const getItems = useCallback(() => {
  return [number,  number + 1,  number + 2]
}, [number])

const theme = {
  backgroundColor : dark ? '#333' : '#FFF',
  color : dark ? '#fff' : '#333'
}

  return (
   <div style={theme}>
    <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
    <button onClick={() => setDark((prevDark) => !prevDark)}>Temayı Değiştir</button>
    <NumberList getItems= {getItems}/>
    
   </div>

  )
}


export default App
