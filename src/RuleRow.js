import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    return (
      <tr className={`RuleRow RuleRow-${this.props.score === undefined ? 'active': 'disabled'}`}
          onClick={this.props.score === undefined ? this.props.doScore : null}>  
          {/* if there's no score then, give it a score when clicked otherwise you can't add in a new score */}
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;