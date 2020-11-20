import React, {Component} from 'react';

import './post-status-filter.sass';

export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'}
    ]
  }
  render() {  
    const buttons = this.buttons.map(({name, color, label}) => {
    const {filter, onFilterSelect} = this.props,
          active = filter === name,
          className = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button 
          type="button" 
          key={name} 
          className={`btn ${className}`}
          onClick={() => onFilterSelect(name)}
        >
          {label}
        </button>
      
      )
    })
    return ( 
      <div className="btn-group">
        {buttons}
      </div>
      )}
}
 