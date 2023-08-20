import { useState } from "react"

function BirdenÇokReturn() {
    const [status, setStatus] = useState(false)

    if(status) {
    return <div>statu true</div>
    }else {
        return <div>statu false
            <button onClick={() => {
                setStatus(!status)
            }}>Change</button> 
        </div>
    }
    
}

export default BirdenÇokReturn;