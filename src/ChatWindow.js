import React, { Component } from "react";
import MessageHistory from "./MessageHistory";
import MessageInput from "./MessageInput";

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
        <MessageHistory messages={messages} username={username} />
        <MessageInput onPostMessage={this.composeMessage} />
      </div>
    );
  }
}

export default ChatWindow;
