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
  isDisabled = () => {
    return false;
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
            {/*<div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{this.users[0].username}</div>

              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === this.users[0].username
                        ? "message sender"
                        : "message recipient"
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>

              <div>
                <form className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..."
                  />
                  <div className="input-group-append">
                    <button
                      className="btn submit-button"
                      disabled={this.isDisabled()}
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>*/}
            {/*<div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{this.users[1].username}</div>
              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === this.users[1].username
                        ? "message sender"
                        : "message recipient"
                    }
                  >
                    <p>{`${message.username}: ${message.text}`}</p>
                  </li>
                ))}
              </ul>

              <div>
                <form className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your message..."
                  />
                  <div className="input-group-append">
                    <button
                      className="btn submit-button"
                      disabled={this.isDisabled()}
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>*/}
            <ChatWindow username={this.users[0].username} messages={messages} />
            <ChatWindow username={this.users[1].username} messages={messages} />
          </div>
        </main>
      </div>
    );
  }
}

class ChatWindow extends Component {
  isDisabled = () => {
    return false;
  };
  render() {
    const { username, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{username}</div>

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

        <div>
          <form className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your message..."
            />
            <div className="input-group-append">
              <button
                className="btn submit-button"
                disabled={this.isDisabled()}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
