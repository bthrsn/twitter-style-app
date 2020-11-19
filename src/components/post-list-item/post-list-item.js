import React, {Component} from 'react';
import './post-list-item.sass';

class PostListItem extends Component {

  state = {
    important: false,
    like: false
  }
  
  // Событие изменения поста на важный и наоборот
  onImportant = () => {
    this.setState(({important}) => ({
      important: !important
    }))
  }
  
  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }
  
  render() { 
    // Переменная для свойств, поступающих из постов
    // В деструктуризацию добавим новое свойство для удаления постов onDelete
    const {label, onDelete} = this.props;
    const {important, like} = this.state;
    
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
        onClick={this.onLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          // Переключение поста на важный и наоборот
          onClick={this.onImportant}>
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
}
  
export default PostListItem;