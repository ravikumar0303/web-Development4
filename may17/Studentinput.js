
import "./ex.css"
import { useState } from "react";
export default function Studentinput()

{
      let [value,svalue]=useState();
        function container(e)
    {
        switch(e.target.value)
        {
            case "Graduate" : svalue(e.target.value)
                               break;  
                         
                    
            case "PG" :   svalue(e.target.value)
                         break;

            case "UG" :  svalue(e.target.value)
                         break;

            default:break;
        }
    }
    return <div className="outline text-white" >
       <u> <i><h1>Student Input</h1> </i></u>
                <b>Your Name: <input type="text" placeholder="your name" required /> </b>
                  <br></br><br></br>
               <b>Email :<input type="email" placeholder="email" required/> </b>
                 <br></br><br></br>
                 <select onChange={container} className="btn btn-primary btn-lg dropdown-toggle" >
                    
                    <option>select</option>
                    <option value="Graduate">Graduate</option>
                   <option value="PG">PG</option>
                   <option value="UG">Under Graduate</option> 
            </select>

          {value=='Graduate'? 
                <div> 
              
                  <b> Degree: <input type="text" /></b>
                  <b> Year: <input type="date" /></b>
                 <b>University: <input type="text" required/> </b>
                 <br></br>
                <b>Final YearScore:<input type="text" /></b>
          
               </div>: " "}
           
          {value=='PG'? 
                    <div>
                        
                      <b>Year: <input type="date" required /> </b>
                      <b> Thesis Subject: <input type="text" required/> </b>

                   </div>: " "}

         {value=="UG"?
                  <div>
             
                    <b> SSC Year:<input type="date"  required/></b>
                        
                   <b> HSC Passing Year: <input type="date" required/></b>

               </div>:" "}

              
</div>
}