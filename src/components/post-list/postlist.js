import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = () => {
  return ( 
    <div className="app-list list-group">
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </div>
  );
}
 
export default PostList;