
import axios from "axios";
import { Component } from "react";
import './ex1.css'
import Additem from './Additem';
export default class Shop extends Component
{
    constructor()
    { 
         super()
         this.state={optionarr:[], displayItem:[], items:[]}
    }
    componentDidMount()
    {
        
        axios.get("./Shop.json").then((resp)=>{
        
            let arr=resp.data
            this.setState({items:arr})
            let temp = arr.map((e,index)=>{ return <option key={index} 

               value={e.id}>{e.id}</option>})

            this.setState({optionarr:temp})

        })
    }

    add =(e)=>{
        this.state.items.map((r)=>{
            if(e.target.value === r.id){
                let temp = [this.state.displayItem];
                temp.push(r);
                console.log(this.temp)
                this.setState({displayItem:temp});
            }}
        )
    }

    show(){
        // console.log(this.state.displayItem);
        
        return  this.state.displayItem.map((e)=>{return <Additem id={"Item name :  "+e.item_name +"     ,  "  +  "item_cost:"+ e.unit_cost} ></Additem>})
    }

    render()
    {
        return(
              
              <div className="containar text-black">
              <table border="2" align="center">
             
                 <select  className="btn btn-primary btn-lg dropdown-toggle" onChange={this.add}>{this.state.optionarr} </select>

                 <input type="button" value="add"/>

                 <br></br><br></br>
                
                
                 {/* <hr></hr>
           
                     <tr><td>id</td>&nbsp;&nbsp;
                     <td>item_name</td>&nbsp;<td>unit_cost</td></tr> */}

            

                
                 <div className="text-black">{this.show()}</div>
                 </table>
            </div>)
      }
   }
