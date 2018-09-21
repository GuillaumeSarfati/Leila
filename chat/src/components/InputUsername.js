import React from 'react';
import './style.css'


class InputUsername extends React.Component {
    render() {
      return (
        <div className="InputUsername">
          <div id="chat">
              <div id="chat-window">
                  <div id="output"></div>
                  <div id = "feedback"></div>
              </div>
                <input id="handle" type="text" placeholder="Username" />
                <input id="message" type="text" placeholder="Type your message" />
                <button id="send">Send</button>
          </div>
        </div>
      );
    }
  }

  export default InputUsername;