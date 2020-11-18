import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
  return ( 
  <form className="bottom-panael d-flex">
    <input
      type="text"
      placeholder="О чем вы думаете сейчас?"    
      className="form-control new-post-label"
    />
    <button
    type="submit"
    className="btn btn-outline-secondary">
    Добавить
    </button>
  </form>
  );
}
 
export default PostAddForm;