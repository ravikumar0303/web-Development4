import {Routes,Route} from 'react-router-dom'
import Calling from './Calling';
// import Params from './Params';
import Showtime from '../may17/Showtime';
 import Studentinput from "../may17/Studentinput";
  import Usercon from '../may17/Usercon';
// import Opction from '../may16/Opction'
//  import Error from "./Error"
import Shopping from '../may19/Shopping'

export default function Routerserver()


{

  

return <Routes>
   
       <Route path="/" element={<Calling></Calling>}>
        <Route path="/Showtime" element={<Showtime></Showtime>}></Route>
       <Route path="/Studentinput" element={<Studentinput></Studentinput>}></Route>
        <Route path="/Usercon" element={<Usercon></Usercon>}></Route> 

        <Route path="/Shopping" element={<Shopping></Shopping>}></Route> 
        {/* <Route  element={Error}> </Route> */}
       {/* <Route path="/tatePrint" element={<Opction></Opction>}></Route> */}
      
      {/* <Route path="/shop" element={<Params></Params>}></Route>  */}
     {/* <Route path="/:name" element={<Params></Params>}></Route> */}

     </Route>

     </Routes>
}


