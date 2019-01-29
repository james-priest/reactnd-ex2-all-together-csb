import React, { Component } from "react";
import PropTypes from "prop-types";

class MessageInput extends Component {
  state = {
    msg: ""
  };
  isDisabled = () => {
    if (this.state.msg === "") {
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

MessageInput.propTypes = {
  onPostMessage: PropTypes.func.isRequired
};

export default MessageInput;
