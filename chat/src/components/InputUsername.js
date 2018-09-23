import React, { Component } from 'react'; 


export default class InputUsername extends Component {
    //initial state
    constructor(props){
      super(props);
      this.state = {
        value: ""
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    //create methods
    handleChange(event){
      this.setState({value: event.target.value});
    }

    handleSubmit(event){
      console.log('Username ' + this.state.value + ' Submitted')
      event.preventDefault();
      //this will clear input after submit
      this.setState({value: ""});
    }

    render() {
      return (
        <div className="inputusername">
          <form id="userform" onSubmit={this.handleSubmit} ref="form">
									<div className="form-group">
										<label> Enter Username </label>
										<input type="text" className="form-control" id="username" value={this.state.value} onChange={this.handleChange}></input>
										<br />
										<input type="submit" className="btn btn-primary" value="Login"></input>
									</div>
					</form>
        </div>
      );
    }
  }
