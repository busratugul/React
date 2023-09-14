import React from 'react'
import useCounter from './useCounter'

function Sayac() {
   /*  const [num, setNum] = useState(0)

    const increment = () => {
        setNum((prevNum) => num + 1)
    }
    const decrement = () => {
        setNum((prevNum) => num - 1)
    }
    const reset = () => {
        setNum(0)
    } */

    const [num, increment, decrement, reset]= useCounter()

    return (
    <div>
        <h2> Sayı = {num} </h2>
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
    </div>
  )
}

export default Sayac