import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHUOOhfcg_fwzYuVMAjkS8kB2RHfl-mOI",
    authDomain: "try-chat-b03cd.firebaseapp.com",
    databaseURL: "https://try-chat-b03cd.firebaseio.com",
   projectId: "try-chat-b03cd",
   storageBucket: "try-chat-b03cd.appspot.com",
   messagingSenderId: "884879397435"
 };
 firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
