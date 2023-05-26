
import React, { Component } from "react";
import axios from 'axios';

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ""
    };
  }
  componentDidMount() {
    axios({
      method: "post",
      url: "/Shop",
      // how to fetch userEmail from the form
      data: { userEmail: this.state.userEmail }
    });
  }

  render() {
    const { userEmail } = this.state;
    console.log(userEmail);
    return (
      <div>
        <input
          name="userEmail"
          placeholder="enter your mail"
          value={userEmail}
          onChange={e => this.setState({ userEmail: e.target.value })}
        />
        </div>
    );
  }
}

export default Sample;