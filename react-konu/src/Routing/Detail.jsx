import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { data } from "./Home"

const Detail = () => {
  const {id }= useParams()
  const [getData, setGetData] = useState(null)
  const location = useLocation()
  console.log(location, "location")

    useEffect(() => {
        if(id) {
        setGetData(data.find(dt => dt.id == id))
        }
    }, [id])

    console.log(getData);

    return(
       <div>
        <div>{getData?.name}</div>
        <div>{getData?.description}</div>
       </div>
    )
}

export default Detail;