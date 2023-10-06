import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {

  render() {  
    const {score, name, doScore, description} = this.props;
    
    // if this.props.score is undefined (hasn't been used yet), do this.props.doScore, otherwise disable the doScore)
    const disabled = score != undefined
    return (
      <tr 
          className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
          onClick={disabled ? null : doScore}>
        
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;
