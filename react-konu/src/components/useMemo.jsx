import React, { useState,useMemo } from "react"

const UseMemo = () => {

    const [count, setCount] = useState(0)
    const [textChange, setTextChange] = useState("")

    const largeDataFunc =  useMemo(() => {
        [...new Array(10000)].forEach((item) => {})

        return count * 3
    },[])

    return(
        <div>
            <h1>USE MEMO</h1>
            count değeri(default):{count}
            <button onClick={() => {setCount(count + 1)}}>Click me!</button>
            {largeDataFunc}
            <input type="text" onChange={e => setTextChange(e.target.value)} />
        </div>
    )
}

export default UseMemo