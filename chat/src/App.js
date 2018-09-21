import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputUsername from './components/InputUsername'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's try and Chat</h1>
          <InputUsername />
        </header>
      </div>
    );
  }
}

export default App;
