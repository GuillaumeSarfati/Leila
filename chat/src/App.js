import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { InputUsername } from './components/InputUsername';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <InputUsername />
      </div>
    );
  }
}

