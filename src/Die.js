import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={() => this.props.handleClick(this.props.idx)} 
        // pass in this.props.idx so toggleLocked(idx) can use the idx
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
