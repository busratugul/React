import { useState,useTransition } from "react"

function App() {

const [input, setInput] = useState("")
const [myList, setMyList] = useState([])
const [isPending,startTransition] = useTransition()

const handleChange = (e) => {
  setInput(e.target.value)

  startTransition(() => {
    const myArray = []
    for (let i = 0; i < 2000; i++) {
      myArray.push(e.target.value)
    }
    setMyList(myArray)
  })
}

return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending 
      ? 
      "YÜKLENİYOR..." 
      :
      myList.map((item,idx) => {
          return <div key={idx}> {item} </div>
        })
      }

    </div>
  )
}

export default App
