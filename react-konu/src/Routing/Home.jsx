import { useNavigate } from "react-router-dom";
export const data = [
    {
        id: 0,
        name: "React",
        description: "React Açıklama"
    },
    {
        id: 1,
        name: "Vue",
        description: "Vue Açıklama"
    },
    {
        id: 2,
        name: "Angular",
        description: "Angular Açıklama"
    }
]

const Home = () => {
    const navigate = useNavigate()
    
    return ( 
        <>
        {
        data.map((dt,idx) => (
            <div onClick={()=>navigate(`detail/${dt.id}`)} style={{cursor:"pointer" ,marginBottom:"30px"}}key={idx}>
                <div>{dt.name}</div>
                <div>{dt.description}</div>
            </div>
        ))
        }
        </>
     );
}

export default Home;