import React, { Component } from 'react';
import ButtonSubmit from './ButtonSubmit'
import InputMessage from './InputMessage';


export default class Room extends Component {
	constructor(){
		super();
		this.state = {
			users : "",
			messages : "",
		}
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
								<InputMessage />
								<br />
								<ButtonSubmit />
								
							</div>
						</form>
					</div>
				</div>
        )
    }
};

