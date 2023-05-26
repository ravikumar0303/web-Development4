
import axios from 'axios';
import { Component } from 'react';

export default class Sample extends Component {
  constructor(props) {
    super(props);
  }


  // Toadditem =(e)=>
  
  // {
        
  // }
  
  render(){
    return <div>
    
     
          {this.props.id} &nbsp;&nbsp; 
          {this.props.unit_cost}&nbsp;
          {this.props.item_name}

     
      

    </div>
  }
}