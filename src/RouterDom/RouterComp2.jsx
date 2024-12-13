import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Home1 from "./Home1";
import About from "./About";
// import Contact from "../RouterDom/Contact";
import Price from "./Price";
// import Login from "../RouterDom/Login";
// import Loginform from '../LoginComp/LoginForm';
// import { useNavigate } from 'react-router-Dom'


function RouterComp2() {
  return (
    // <div className="App">
        <Router>
                <div style={{backgroundColor:"aqua",padding:"15px",margin:"auto",display:"flex",justifyContent:"space-evenly"}}>
                    <Link className="links" to="/Home1">Home1</Link>
                    <Link className="links" to="/Contact">Contact</Link>
                    <Link className="links" to="/about">About</Link>
                    <Link className="links" to="/price">Price</Link>
                    <Link className="links" to="Login">Login</Link>
                   
                </div>
                <Routes>
                    {/* <Route path="*"element={<pagenotfound/>}></Route> */}
                    {/* <Route path="/login"element={<Loginform/>}></Route> */}
                    <Route path="/Home1"element={<Home1/>}></Route>
                    <Route path="/Price"element={<Price/>}></Route>
                    <Route path="/About"element={<About/>}></Route>

                </Routes>
         </Router>

      
    // </div>
  )
}

export default RouterComp2;


