import React, { Component } from 'react';


export default class Room extends Component {
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
		console.log('Message ' + this.state.value + ' Submitted')
		//stop the form from refreshing the page on submit
		event.preventDefault();
		//this will clear input after submit
		this.setState({ value: ""});
	  }

  
	render(){
        return (
            <div id="messageArea" className="row">
					<div className="col-md-3">
						<div className="well">
							<h3> Online Users</h3>
							<ul className="list-group" id="users"></ul>
						</div>
					</div>
					<div className="col-md-8 offset-md-8">
						<div className="chat" id="chat"></div>

						<form id="messageForm" onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label> Enter Message </label>
								<textarea className="form-control" id="message" value={this.state.value} onChange={this.handleChange}></textarea>
								<br />
								<input type="submit" className="btn btn-primary" value="Send Message" />
							</div>
						</form>
					</div>
				</div>
        )
    }
};

