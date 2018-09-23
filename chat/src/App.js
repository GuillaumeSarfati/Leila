import React, { Component } from 'react';
import './App.css';
// import InputUsername  from './components/InputUsername';
import Room from './components/Room';

export default class App extends Component {

  render() {
    return (
      <div className="App">
							{/* <InputUsername /> */}
              <Room/>
				</div>
    );
  }
}

