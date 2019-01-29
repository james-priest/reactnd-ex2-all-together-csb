import React, { Component } from "react";
import MessageHistory from "./MessageHistory";
import MessageInput from "./MessageInput";
import PropTypes from "prop-types";

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

ChatWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onPostMessage: PropTypes.func.isRequired
};

export default ChatWindow;
