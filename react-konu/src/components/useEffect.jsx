import {useEffect, useState } from "react"



function UseEffect() {
  
  const [name, setName] = useState("react")
  useEffect( () => {
    setTimeout(() => {
      setName("React Güncellendi")
      
    }, 4000);
  },[])
return(
<>
{name}
</>

)}

export default UseEffect