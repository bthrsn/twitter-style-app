import React, {Component} from 'react';
import './post-add-form.sass';

export default class PostAddForm extends Component {
  
  state = {
    text: ''
  }
  
  onValueChange = (e) => {
    this.setState({
    // Так как каждое следуещее зхначение не зависит от предыдущего, то мы можем записать setState напрямую. И таким образом, мы будем каждый раз, когда печатаем в форму новый текст, обновлять state
      text: e.target.value
    });
  }
  
  onSubmit = (e) => {
    // На событие отправки формы нужно обязательно тменять перезагрузку страницы с помощью метода preventDefault для события
    e.preventDefault();
    // Так как вводимы текст идет в state - его и используем
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    })
  }
  
  render() { 
    return ( 
      <form 
        className="bottom-panel d-flex"
        // Событие submit нужно вешать именно на форму
        onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чем вы думаете сейчас?"    
          className="form-control new-post-label"
          onChange={this.onValueChange}
          // Таким образом мы сможем управлять значением state, чтобы очищать его после ввода текста
          value={this.state.text}
        />
        <button
        type="submit"
        className="btn btn-outline-secondary">
        Добавить
        </button>
      </form>
    )
  }
}
