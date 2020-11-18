import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      placeholder="Поиск по записям"
      className="form-control searh-input"
    />
  )
}

export default SearchPanel;