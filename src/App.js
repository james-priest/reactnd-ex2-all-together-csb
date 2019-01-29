import React, { Component } from "react";
import "./App.css";
import ChatWindow from "./ChatWindow";

class App extends Component {
  users = [{ username: "Amy" }, { username: "John" }];
  state = {
    messages: [
      { username: "Amy", text: "hi, John!" },
      { username: "Amy", text: "how are you?" },
      { username: "John", text: "hi, Amy! good, you?" },
      { username: "Amy", text: "do u like me for real?" },
      { username: "John", text: "I love u for real😘" },
      { username: "Amy", text: "oh John 😍😍😍" },
      { username: "John", text: "oh Amy 🤗🤗🤗" }
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
            {this.users.map(user => (
              <ChatWindow
                key={user.username}
                username={user.username}
                messages={messages}
                onPostMessage={this.postMessage}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
