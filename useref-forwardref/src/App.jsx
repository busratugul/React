import { forwardRef } from "react"
import { useRef } from "react"

const Input = forwardRef((props, ref) => {
  return <input ref= {ref} type="text" {...props}/>
})

Input = forwardRef(Input)

function App() {
  const inputRef = useRef()
  const FocusInput = () => {
    inputRef.current.focus()
  }
 
  return (
    <>
    <h1>useRef() - useForward()</h1>
    <Input ref={inputRef}/>
    <button onClick={FocusInput}>Focusla</button>
    </>
   
  )
}

export default App
