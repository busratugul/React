import React from 'react'
import { useState } from 'react'

function useCounter() {
    const [num, setNum] = useState(0)

    const increment = () => {
        setNum((prevNum) => num + 1)
    }
    const decrement = () => {
        setNum((prevNum) => num - 1)
    }
    const reset = () => {
        setNum(0)
    }
  
    return [num, increment, decrement, reset]
}

export default useCounter