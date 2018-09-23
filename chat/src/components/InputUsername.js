import React, { Component } from 'react'; 


export default class InputUsername extends Component {
    constructor(props){
      super(props);
      this.state = {value: ""};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }

    handleSubmit(event){
      alert('Username ' + this.state.value + ' Submitted')
      event.preventDefault();
    }

    render() {
      return (
        <div className="inputusername">
          <form id="userform" onSubmit={this.handleSubmit}>
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
