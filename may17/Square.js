import "./ex.css"
 import React from "react";

 export default class Square extends React.Component
{
        
    constructor()
    {          
              super()
              this.n1=0
              this.state= {sqr:0}

    }

    textf1=(e)=>
    {
        this.n1 = e.target.value
        let r = this.n1*this.n1
        this.setState({sqr:r})
    }
     textf1=(e)=>
    {
        this.n1 = e.target.value
        let r = this.n1*this.n1
        this.setState({sqr:r})
    }
      
     render ()
     {
        
        return <div>

             <input type="number" onBlur={this.textf1}></input>
             <p> square={this.state.sqr}</p>

          </div>


     } 
}
