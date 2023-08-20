import { useState } from 'react'
import './App.css'
import {Title} from "./components/Components"
import Busra from "./components/Busra"
import Deneme from "./components/deneme"
import BirdenÇokReturn from './components/BirdenÇokReturn'
import UseEffect from './components/useEffect'
import Routing from './Routing/routing'
import UseReff from './components/UseRef'




function App() {
const [count, setCount] = useState(0)

console.log(count) //0

const [color, setColor] = useState("blue")

const [ad, setAd] = useState(" ")
console.log(ad);

const [data, setData] = useState([])

const name = "busra"

const array = [
  {name: "array:1", id:0},
  {name: "array:2", id:1},
  {name: "array:3", id:2},
]
console.log(array, "arr");


const clickFunc = () => {
  console.log("sen butona tıkladın")
  setCount(count + 1)
  if(count >= 5){
    setCount(count)
  }

  setColor("red")
}

const targetFunc = (e) => {
  setAd(e.target.value)
}
console.log(data);
const clickFnc = () => {
  setData( prev => ([...prev,ad]))
}


  return (
    <div>
        <Title>hello</Title>
        {name}
        <Busra props = { name }/>
        <Deneme/>
        {count}
        <BirdenÇokReturn/>
        <UseEffect/>
    
      {
        array.map((arr, i) => (
          <div style={{color}} key={arr.id}> {arr.name} </div>
        ))
      }

        <button onClick={ clickFunc }>Tıkla</button>
      <input type="text" onChange = {targetFunc} />
      <button onClick={clickFnc}>Yazdır</button>
      
      {
      data.map((dt,idx) => (
        <div key={idx}> {dt} </div>
      ))
      }
      

    <Routing/>
    <UseReff/>
    </div>

  )
}

export default App
