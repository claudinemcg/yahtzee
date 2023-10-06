import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} 
          disabled={this.props.disabled}
          rolling={this.props.rolling && !this.props.locked[idx]}/> // roll die if rolling is true and individual die is not locked
      )}
    </div>
  }
}

export default Dice;
