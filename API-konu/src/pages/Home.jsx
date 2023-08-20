import { useEffect,useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Home = () => {
    const navigate = useNavigate()
    const [allData, setAllData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    const getData = async () => {
        setLoading(true)
        const {data} = await axios.get("https://fakestoreapi.com/products")
        setAllData(data)
        setLoading(false)
    }
    
    getData()
    }, [])

    console.log(allData);

    return(
    loading ?<div>LOADING...</div> :
    <div>
    {
        allData?.map((data,idx) => (
                <div onClick={() => navigate(`detail/${data?.id}`)} style={{marginBottom:"30px", cursor:"pointer"}} key={idx}>
                    <div>{data.title}</div>
                    <img style={{width: "100px"}}src={data.image} alt="" />
                </div>
            ))
    }
    </div>
    )
}

export default Home