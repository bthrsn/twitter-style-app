import React from 'react';
import './search-panel.sass';

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