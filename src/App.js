import React, { Component } from "react";
import "./App.css";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" }
];

class App extends Component {
  isDisabled = () => {
    return false;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
          <p>Exercise 2 - All Together</p>
        </header>
        <main className="App-main">
          <div className="container">
            <div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{users[0].username}</div>

              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === users[0].username
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

            <div className="chat-window">
              <h2>Super Awesome Chat</h2>
              <div className="name sender">{users[1].username}</div>
              <ul className="message-list">
                {messages.map((message, index) => (
                  <li
                    key={index}
                    className={
                      message.username === users[1].username
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
          </div>
        </main>
      </div>
    );
  }
}

export default App;
