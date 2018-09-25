import React, { Component } from 'react'; 



export default class InputUsername extends Component {
    render() {
      return (
        <div className="inputusername">
          <form id="userform" onSubmit={this.handleSubmit} ref="form">
		<div className="form-group">
		<label> Enter Username </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="username" 
                      >
                    </input>
		    <br />
		    <input type="submit" className="btn btn-primary" value="Login"></input>
		</div>
	    </form>
        </div>
      );
    }
  }
  
