import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.sass';

const PostList = ({posts, onDelete}) => {
  
  // Переменная для перебора массива с постами
  const elements = posts
  // Проверка на наличие в data только объектов с информацией внутри
    .filter(post => typeof(post) === "object" && isEmpty(post))
    .map(post => {
    // Отделим id от остальных элементов post
    const {id, ...postProps} = post;
      return (<li key={id} className="list-group-item">
                <PostListItem 
                  {...postProps} 
                  // Cвойство элемента для удаления поста, которое определяет пост по id, который мы передаем выше
                  onDelete={() => onDelete(id)}/>
              </li>)
    })
  
  function isEmpty(obj) {
    for(let key in obj) {
      return true;
    }
    return false;
  }
  
  return ( 
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  );
}
 
export default PostList;