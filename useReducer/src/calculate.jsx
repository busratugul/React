import { useContext } from "react";
import {NumberContext} from './App'

function Calculte () {
    const numberContext = useContext(NumberContext)
    return ( 
        <div>

            <div>{numberContext.count}</div>
    <button onClick={() => numberContext.dispatch("increment")}>Arttır</button>
    <button onClick={() => numberContext.dispatch("decrement")}>Azalt</button>
    <button onClick={() => numberContext.dispatch("reset")}>Sıfırla</button>

        </div>
     );
}

export default Calculte ;