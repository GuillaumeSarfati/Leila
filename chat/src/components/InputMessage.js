import React, { Component } from 'react';

export default class InputMessage extends Component {
    render(){
        return(
            <textarea 
                className="form-control" 
                id="message" 
                placeholder="Ecrivez votre message..."
                >
            </textarea>
            
        )
    }
}