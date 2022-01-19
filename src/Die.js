import React, { Component } from "react";
import "./Die.css";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";
// library.add(faDiceOne,
//   faDiceTwo,
//   faDiceThree,
//   faDiceFour,
//   faDiceFive,
//   faDiceSix)

class Die extends Component {
  static defaultProps = {
    numberWords: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix ]
  }
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
    let numWord = this.props.numberWords[this.props.val-1]
    let classes = "Die "
    if (this.props.locked) classes += "Die-locked ";
    return (
      
        <FontAwesomeIcon 
          icon={numWord}
          size={"5x"}
          className={classes}
          onClick={this.handleClick} 
          disabled= {this.props.disabled}/>
      
       
     
    );
  }
}

export default Die;
