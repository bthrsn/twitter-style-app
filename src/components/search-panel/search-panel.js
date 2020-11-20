import React, {Component} from 'react';
import './search-panel.sass';

export default class SearchPanel extends Component {

state = {
  term: ''
}

onUpdateSearch = (e) => {
  const term = e.target.value;
  this.setState({term});
  // Это функция из компонента app
  this.props.onUpdateSearchPanel(term);
}

 render() { 
   return (
      <input
        type="text"
        placeholder="Поиск по записям"
        className="form-control searh-input"
        onChange={this.onUpdateSearch}
      />
    )
  }
}
