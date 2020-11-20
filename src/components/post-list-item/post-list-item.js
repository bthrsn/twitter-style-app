import React from 'react';
import './post-list-item.sass';

const PostListItem = ({label, onDelete, onToggleImportant, onToggleLiked, important, like}) => {

  // Переменная для добавления классов в пост
  let classNames = 'app-list-item d-flex justify-content-between';
  if (important) {
    classNames +=' important';
  }
  if (like) {
    classNames +=' like';
  }

  return ( 
    <div className={classNames}>
      <span 
      className="app-list-item-label"
      onClick={onToggleLiked}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button 
        type="button" 
        className="btn-star btn-sm"
        // Переключение поста на важный и наоборот
        onClick={onToggleImportant}>
          <i className="fa fa-star"></i>
        </button>
        <button 
        type="button" 
        className="btn-trash btn-sm"
        // Добавим событие6 удаление постов по клику, если бы не было деструктуризации выше - надо было бы писать this.props.onDelete
        onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
          <i className="fa fa-heart"></i>
    </div>
  </div>
  );
}
  
export default PostListItem;