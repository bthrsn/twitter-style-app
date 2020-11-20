import React, {Component} from 'react';
// import { Button } from 'reactstrap';
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
        // Способ со сторонней библиотекой reactstrap   
        // <Button key={name} outline color={color}>{label}</Button>
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
 