import { Component } from "react";

export default class Fruits extends Component
{
    constructor()
    {
        super()
        this.state ={arr:["mango","plum"]}
    }
    handler=(e)=>{

        let fruitname= e.target.value
        let temp =[...this.state.arr] 
        temp.push(fruitname)
        console.log(this.state)
       
        this.setState({arr:temp}) 
    }

    getLi=()=>{


        return this.state.arr.map((fruitname,index)=>{return <li key={index}>{fruitname}</li>})
    }
    render()
    {
        return <div style={{margin:"5px"}} className="outline">
            Add:Fruit<input type="text" onBlur={this.handler}  ></input>
            <br></br>
            <ol style={{textAlign:"left"}}>
              {this.getLi()}
            </ol>
            {/* <p>Arr = {this.state.arr}</p> */}
        </div>
    }
}