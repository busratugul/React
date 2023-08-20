import React, { useState } from "react"
import { useCallback } from "react"

const Counter = React.memo(({increment}) => {
    console.log("render !!!")
    return(
        <>
         <button onClick={increment}>Arttır</button>
        </> /*hiçbir işlem yapmamamıza ragmen sürekli render ediliyor bunu engellemek için react.Memo*/ 
    )
})

const Callback = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const incrementCount = () => {
        setCount(count + 1)
    }

    const increment = useCallback(() => {
        setCount(count + 1)
    },[text])

 

    return (
        <div>
            <h1>useCallback - React.Memo</h1>
            <div>{count}</div>
            <input type="text" onChange={e => setText(e.target.value)} />
            <Counter increment = { increment }/>
        </div>
    )
}

export default Callback