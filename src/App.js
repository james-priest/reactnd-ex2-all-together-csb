import React, { Component } from "react";
import "./App.css";

class App extends Component {
  users = [{ username: "Amy" }, { username: "John" }];
  state = {
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" }
    ]
  };
  postMessage = msg => {
    console.log(msg);
    this.setState(prevState => ({
      messages: [...prevState.messages, msg]
    }));
  };
  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - All Together</p>
        </header>
        <main className="App-main">
          <div className="container">
            <ChatWindow
              username={this.users[0].username}
              messages={messages}
              onPostMessage={this.postMessage}
            />
            <ChatWindow
              username={this.users[1].username}
              messages={messages}
              onPostMessage={this.postMessage}
            />
          </div>
        </main>
      </div>
    );
  }
}

class ChatWindow extends Component {
  composeMessage = msg => {
    const { username } = this.props;
    const text = msg;
    const msgObect = {
      username,
      text
    };
    this.props.onPostMessage(msgObect);
  };
  render() {
    const { username, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>
        <ChatHistory messages={messages} username={username} />
        <MessageInput onPostMessage={this.composeMessage} />
      </div>
    );
  }
}

function ChatHistory(props) {
  const { messages, username } = props;
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li
          key={index}
          className={
            message.username === username
              ? "message sender"
              : "message recipient"
          }
        >
          <p>{`${message.username}: ${message.text}`}</p>
        </li>
      ))}
    </ul>
  );
}

class MessageInput extends Component {
  state = {
    msg: ""
  };
  isDisabled = () => {
    if (this.state.value === "") {
      return true;
    }
    return false;
  };
  handleChange = e => {
    this.setState({
      msg: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onPostMessage(this.state.msg);
  };
  render() {
    const { msg } = this.state;
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={msg}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
