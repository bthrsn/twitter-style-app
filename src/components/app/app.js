import React, { Component } from 'react';
import nextId from "react-id-generator";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import styled from 'styled-components';

// Стили для div, в котором заключены все элементы приложения
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

// // Можно на основе созданного компонента - создать новый и добавить к нему стилей. Старые стили сохранятся
// const StyledAppBlock = styled(AppBlock)`
//   background-color: black;
// `

export default class App extends Component {

  state = {
    data: [
      { label: "Start to learn React", important: false, like: false, id: nextId() },
      { label: "Now I know about state in React", important: false, like: false, id: nextId() },
      { label: "Need a break to play Destiny 2", important: false, like: false, id: nextId() },
    ],
    // Это строка поиска
    term: '',
    filter: 'all'
  }
  
  deleteItem = (id) => {
    this.setState(({data}) => {
      // Узнать на каком месте стоит наш элемент с помощью метода findIndex
        const index = data.findIndex(elem => elem.id === id),
              // Так как state напрямую менять нельзя - нужно использовать промежуточные переменные, потому мы сначала создаем новый массив, а потом передаем его в data в state
              before = data.slice(0, index),
              after = data.slice(index + 1),
              newArr = [...before, ...after];
              
        return {
          data: newArr
        }
        
    });
  }
  
  addItem = (body) => {
    const newItem =  {
      label: body,
      important: false,
      id: nextId()
    }
    
    this.setState(({data}) => {
      const newData = [...data, newItem];
      
      return {
        data: newData
      }
    })
  }
  
  // onToggle = (id, {props}) => {
  //   this.setState(({data}) => {
  //     // Находим индекс элемента по переданному id
  //     const index = data.findIndex(elem => elem.id === id),
  //     // Записываем его в переменную
  //           oldItem = data[index],
  //     // Перезаписываем свойство like этого элемента через новую переменную
  //           newItem = {...oldItem, props: !oldItem.props},
  //     // Заменяем старый элемент на новый в state через новую переменную
  //           newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      
  //     return {
  //       data: newData
  //     }        
  //   });
    
  // }
  
  onToggleImportant = (id) => {
  
    this.setState(({data}) => {
      // Находим индекс элемента по переданному id
      const index = data.findIndex(elem => elem.id === id),
      // Записываем его в переменную
            oldItem = data[index],
      // Перезаписываем свойство like этого элемента через новую переменную
            newItem = {...oldItem, important: !oldItem.important},
      // Заменяем старый элемент на новый в state через новую переменную
            newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      
      return {
        data: newData
      }        
    });
  }
  
  onToggleLiked = (id) => {
    this.setState(({data}) => {
      // Находим индекс элемента по переданному id
      const index = data.findIndex(elem => elem.id === id),
      // Записываем его в переменную
            oldItem = data[index],
      // Перезаписываем свойство like этого элемента через новую переменную
            newItem = {...oldItem, like: !oldItem.like},
      // Заменяем старый элемент на новый в state через новую переменную
            newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      
      return {
        data: newData
      }        
    });
  }

  // Функция для поиска
  searchPosts = (items, term) => {
    
    if (term.length === 0) {
      return items
    }
    
    return items.filter(item => item.label.indexOf(term) > -1);
  }
  
  filterPosts = (items, filter) => {
  if (filter === 'like') {
    return items.filter(item => item.like)
  } else {
    return items
  }
}
  
  onUpdateSearchPanel = (term) => {
    this.setState({term})
  }
  
  onFilterSelect = (filter) => {
    this.setState({filter})
  }
  
  render() {
  
  // переменные для общего количесива постов и количества лайкнутых постов
  const {data, term, filter} = this.state,
        likedPosts  = data.filter(elem => elem.like).length,
        allPosts = data.length,
        visiblePosts = this.filterPosts(this.searchPosts(data, term), filter);
  
    return (
      <AppBlock>
        <AppHeader
        likedPosts={likedPosts}
        allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateSearchPanel={this.onUpdateSearchPanel} />
          <PostStatusFilter
          filter={filter} 
          onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList 
          posts = {visiblePosts}
          // Передаем функцию для удаления как props объекта PostList
          onDelete = {this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked} />
        <PostAddForm
        onAdd={this.addItem} />
      </AppBlock>
    )
  }
}

