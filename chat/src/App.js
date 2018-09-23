import React, { Component } from 'react';
import './App.css';
import InputUsername  from './components/InputUsername';
import ButtonInput from './components/ButtonInput'

export default class App extends Component {

  render() {
    return (
      <div className="App">
							<InputUsername />
              <ButtonInput />
				</div>
    );
  }
}

