
import { Link, Outlet } from "react-router-dom"

export default function Calling(){    

    return (
    <div>
        <br></br><br></br>
        <span style={{float:"left",margin:"4px"}}><p><Link to="/Showtime">Welcome</Link></p></span>
     
         
        <span style={{float:"left",margin:"4px"}}><p><Link to="/usercon">Usercon</Link></p></span>
     
        <span style={{float:"left",margin:"4px"}}><p><Link to="/Studentinput">Student </Link></p></span> 
        <span style={{float:"left",margin:"4px"}}><p><Link to="/shopping">shopping</Link></p></span>
          <br></br><br></br><br></br>
        <div style={{border:"2px solid red"}}>
            <Outlet></Outlet>
        </div>
    </div>
    )
}