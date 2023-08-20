import React, {useRef} from "react"


const UseReff = () => {
    const textRef = useRef()
    const countRef = useRef(0)
    const inputRef = useRef()

    console.log(textRef.current)
  
    
    const clickFunction = () => {
        countRef.current++;
        console.log(countRef.current);
    }

    const focusFunc = () => {
        inputRef.current.focus()
    }

    console.log(inputRef.current);
    return (

        <div>
            <h1 ref={textRef}>USEREF</h1>
            <button onClick={clickFunction}>COUNT</button>

            <input ref={inputRef} type="text" />
            <button onClick={focusFunc}>Focus</button>
        </div>
        

    )
}

export default UseReff