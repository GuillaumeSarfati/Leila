import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import Online from './components/Online'
import MessageList from './components/MessageList'
import MessageArea from './components/MessagesArea'


export default class Room extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: {},
            currentRoom: {},
            messages: [],
        }
        this.sendMessage = this.sendMessage.bind(this)
        
    }
    
    sendMessage(text) {
        this.state.currentUser.sendMessage({
            text, 
            roomId: this.state.currentRoom.id,
        })
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: 'v1:us1:dda8a9b5-5d23-4b7b-84ba-c2ce5bd5ffd8',
            userId: this.props.currentUsername,
            tokenProvider: new Chatkit.TokenProvider({
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dda8a9b5-5d23-4b7b-84ba-c2ce5bd5ffd8/token',
            }),
        })

        chatManager
            .connect()
            .then( currentUser => {
                this.setState({ currentUser })
            return currentUser.subscribeToRoom({
                roomId: 17233969,
                messageLimit: 100,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                            messages: [ ...this.state.messages, message],
                        })
                    },
                    
                
                onUserCameOnline: () => this.forceUpdate(),
                onUserWentOffline: () => this.forceUpdate(),
                onUserJoined: () => this.forceUpdate(),
                },
                })
            })
            
            .then(currentRoom => {
                this.setState({ currentRoom })
            })
            .catch(error => console.error('error', error))
		}	
		

	render(){
		const styles = {
			chatContainer :{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
			},
			chat: {
				display: 'flex',
				flex: 1,
			},
			chatListContainer: {
                padding: 20,
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
            },
			onlineList : {
                flex: 'none',
                padding: 20,
                backgroundColor: 'white',
                color: 'black',
            },
		}
        return (
            <div id="messageArea"  style={styles.chat}>
					<div className="col-md-3">
						<div className="well">
							<h3> Online Users</h3>
							<Online currentUser={this.state.currentUser} users={this.state.currentRoom.users} />
						</div>
					</div>
					<div className="col-md-8 offset-md-8">
						<div className="chat" id="chat"></div>

						<form id="messageForm">
							<div className="form-group">
								<MessageList messages={this.state.messages} style={styles.onlineList}/>
								<br />
								<MessageArea onSubmit={this.sendMessage}/>
							</div>
						</form>
					</div>
			</div>			
        )
    }
};

