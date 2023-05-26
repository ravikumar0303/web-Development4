import "./ex.css"
import React, { useState } from 'react'

export default function Usercon() {

    let arr=
    [
    
        { uname: "xxx" ,password :"0303"},
        { uname: "rrr" ,password :"2001"},
        { uname: "yyy" ,password :"2023"},

    ]

    let[value,setans]= useState()
    let str=""
    let pass=""
    function Header(e)
    {
        str=e.target.value
    }
   
    function Header2(e)
    {
        pass=e.target.value
    }

    function Header2(e)
    {
        pass=e.target.value
    }

    
    function check(e)
     {
  
        for(let i=0;i<arr.length;i++)
        {
           if(str==arr[i].uname && pass==arr[i].password)
                {
                   setans("Login successfully....!!!!") 
                    
                    return
                }  
            else
                {
                    setans("Record Not Found")
                   
                }
            
            
        }

       
    }


     let style = { backgroundColor:"pink", textAlign:"center",borderStyle:"aqua",borderWidth:"2px"}

  return (
    <div style={style}>
              <b>Your Name: <input type="text" placeholder="your name" onBlur={Header} required /> </b>
                  <br></br><br></br>
               <b>Password:<input type="password" placeholder="Password" onBlur={Header2} required/> </b>
               <input type="submit" onClick={check}></input>
               <br></br><br></br>
                <p>{value}</p>
    </div>
  )
}
