import React from 'react';

import './app-header.sass';

const AppHeader = ({likedPosts, allPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Mikhail Liakhovets</h1>
      <h2>{allPosts} записей, из них понравилось {likedPosts}</h2>
    </div>
  
  )
}

export default AppHeader;