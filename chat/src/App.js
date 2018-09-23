import React, { Component } from 'react';
import './App.css';
import InputUsername  from './components/InputUsername';
// import ButtonSubmit from './components/ButtonSubmit'

export default class App extends Component {

  render() {
    return (
      <div className="App">
							<InputUsername />
              {/* <ButtonSubmit /> */}
				</div>
    );
  }
}

