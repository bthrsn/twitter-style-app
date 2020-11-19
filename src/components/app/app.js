import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.sass';

const App = () => {

  const data = [
    {},
    { label: "Start to learn React", important: true, id: "rgfdb" },
    { label: "Now I know about state in React", important: false, id: "cvbcb" },
    { label: "Need a break to play Destiny 2", important: false, id: "vhxzs" },
  ]

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts = {data}/>
      <PostAddForm/>
    </div>
  )
}

export default App;