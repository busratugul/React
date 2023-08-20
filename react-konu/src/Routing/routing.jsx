import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./Home"
import Detail from "./Detail"


function Routing() {
    return(
        <>

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </Router>

        </>
    )
}

export default Routing