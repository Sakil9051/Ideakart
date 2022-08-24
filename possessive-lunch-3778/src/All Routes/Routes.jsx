import {Routes,Route} from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Sign_In from "./Sign In"
import Sign_Up from "./Sign Up"


export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/singin" element={<Sign_In/>}/>
            <Route path="/singup" element={<Sign_Up/>}/>
        </Routes>
    )
}