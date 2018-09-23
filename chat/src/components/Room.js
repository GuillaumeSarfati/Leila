import React, { Component } from 'react';

export default class Room extends Component {
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

						<form id="messageForm">
							<div className="form-group">
								<label> Enter Message </label>
								<textarea className="form-control" id="message"></textarea>
								<br />
								<input type="submit" className="btn btn-primary" value="Send Message" />
							</div>
						</form>
					</div>
				</div>
        )
    }
};

