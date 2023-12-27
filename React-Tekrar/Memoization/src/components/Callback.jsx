import React from 'react'

function Callback({increment}) {
    console.log("Callback componenet is re-rendered!!")
  return (
    <div>Callback
        <button onClick={increment} >Click</button>
    </div>
    
  )
}

export default React.memo(Callback)