import React,{ useReducer } from "react"
import { useEffect } from "react"
import Calculte from "./calculate"

export const NumberContext = React.createContext()

const initialValue = 0
const reducer = (state, action) => {
  switch(action){
    case "increment" : 
    return state + 1
      case "decrement" :
        return state - 1
          case "reset" :
            return initialValue
  default : 
    return state
  }
}

function App() {

  const [count,dispatch] = useReducer(reducer, initialValue)

  useEffect(() => {
    console.log("Render oldu");
  },count)

  return (
  <div className="App">
    <NumberContext.Provider value={{count:count, dispatch:dispatch}}>
    <Calculte/>
    </NumberContext.Provider>
  </div>

)}

export default App
