import {Routes,Route} from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Privacy_Policy from "./Privacy_Policy"
import Refund_Policy from "./Refund_Policy"
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
            <Route path="/PrivacyPolicy" element={<Privacy_Policy/>}/>
            <Route path="/Refund_Policy" element={<Refund_Policy/>}/>
        </Routes>
    )
}