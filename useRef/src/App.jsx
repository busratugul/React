import { useState,useEffect,useRef } from "react"

function App() {
const [name, setName] = useState("")
const [render, setRender] = useState(0)

/* useEffect(() => {
 setRender((prev) => prev +1)
}) */

const renderCount = useRef(0)
//{CURRENT=0}

const inputRef = useRef()

useEffect(() => {
 renderCount.current = renderCount.current +1
})

const focusInput = () => {
  console.log(inputRef.current)
  inputRef.current.value = "Büşra"
}

console.log("render edildi")

  return (
  <div>
  
    <input ref = {inputRef} type="text" value={name} onChange= {(e) => setName(e.target.value)} />

    <div> Benim Adım {name} </div>
    <div>{renderCount.current} defa render oldu</div>
    <button onClick={focusInput}>Focus</button>
  </div>
  )
}

export default App
