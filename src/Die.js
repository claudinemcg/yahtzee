import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.props.handleClick(this.props.idx)
    // calling from Game to Dice to Die
      // pass in this.props.idx so toggleLocked(idx) can use the idx
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick} 
      > 
        {this.props.val}
      </button>
    );
  }
}

export default Die;
