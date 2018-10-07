import React, { Component } from 'react';
import './App.css';
import InputUsername  from './components/InputUsername';
import Room from './Room';


export default class App extends Component {
  constructor(){
    super()
    this.state ={
      currentUsername : '',
      currentScreen: 'screen'
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    .then(response => {
      this.setState({
        currentUsername: username,
        currentScreen: 'ChatScreen'
      })
    })
    .catch(error => console.error('error', error))
  }
  render() {
    if (this.state.currentScreen === 'screen') {
    return <InputUsername onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === 'ChatScreen') {
      return <Room currentUsername={this.state.currentUsername} />
    }
    
  }
}



