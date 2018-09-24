import React, { Component } from 'react'

export default class ButtonSubmit extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

   submitButton = () => {
     this.setState({})
   }

  render(){
    return(
      <button className="btn btn-primary" onClick={() => this.submitButton()}>Send</button>
    )
  }
}

