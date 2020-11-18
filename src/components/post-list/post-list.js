import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {
  
  // Переменная для перебора массива с постами
  const elements = posts
  // Проверка на наличие в data только объектов с информацией внутри
    .filter(post => typeof(post) === "object" && isEmpty(post))
    .map(post => {
    // Отделим id от остальных элементов post
    const {id, ...postProps} = post;
      return (<li key={id} className="list-group-item">
                <PostListItem {...postProps} />
              </li>)
    })
  
  function isEmpty(obj) {
    for(let key in obj) {
      return true;
    }
    return false;
  }
  
  return ( 
    <div className="app-list list-group">
      {elements}
    </div>
  );
}
 
export default PostList;