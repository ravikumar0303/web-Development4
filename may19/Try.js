import{React,Component}from 'react';
 import axios from 'axios';
 export default class Try extends Component 
 {
  state = {
  persons: []
  }
 componentDidMount() {
          axios.get(`https://jsonplaceholder.typicode.com/users`)
              .then(response => {
               let users = response.data;
                 this.setState ({users});
             })
     }

 render()
  {
          return (
             <ul >

                   {this.state.users.map (user =>  {user.name}   )}
 
      </ul>
  )
  }
 }