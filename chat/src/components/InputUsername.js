import React, { Component } from "react";

export default class InputUsername extends Component {

    render() {
      return (
        <div className="inputusername">
          <form id="userform">
									<div class="form-group">
										<label> Enter Username </label>
										<input class="form-control" id="username"></input>
										<br />
										<input type="submit" class="btn btn-primary" value="Login"></input>
									</div>
							</form>
        </div>
      );
    }
  }
  