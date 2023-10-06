import React, { Component } from "react";
import "./Die.css";
import {FontAwesomeIcon} from  '@fortawesome/react-fontawesome';
import {faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon="fa-solid fa-dice-one" />
class Die extends Component {
  static defaultProps = {
    icons: new Map ([[1, faDiceOne], [2, faDiceTwo], [3, faDiceThree], [4, faDiceFour], [5, faDiceFive], [6, faDiceSix]] ),
    val: Math.floor(Math.random() * 6) + 1 // get number when loading dice initally
  }
  handleClick = () => {
    this.props.handleClick(this.props.idx)
  }
  
  render() {
    const {val, rolling, locked, icons, disabled} = this.props;
    
    let classes = "Die";
    if (locked) classes += ' Die-locked';
    if (rolling) classes += ' Die-rolling';
    return (
        <FontAwesomeIcon 
          icon={icons.get(val)} 
          size={'5x'} 
          className={classes} 
          disabled={disabled} /** true or false: for mouse pointer */
          onClick={this.handleClick} />
    );
  }
}

export default Die;
