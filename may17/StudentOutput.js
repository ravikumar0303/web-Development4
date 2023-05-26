import "./ex.css"
import { useState } from "react";

import Studentinput from "./Studentinput"

export default function ParentComponent()
{
    let [n1,setN1] =useState(0)
    let [n2,setN2] =useState(0)
    let [s1,setRe] =useState(0)
    
    function StdDeatls(s1)
    {
        setRe(s1)
    }

    return <div className="outline">
        Your Name: <input type="text" onBlur={(event)=>{ setN1(event.target.value)}}  />
        <br></br><br></br>
        Email :<input type="email" onBlur={(event)=>{ setN2(event.target.value)}}/>
        <br></br>
        <p>Student Details = {s1} </p>
        <Studentinput f1={StdDeatls} num1={parseInt(n1)} num2={parseInt(n2)}></Studentinput>
    </div>

}

