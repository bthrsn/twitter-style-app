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

export default  class App extends Component {

  state = {
    data: [
      { label: "Start to learn React", important: true, id: nextId() },
      { label: "Now I know about state in React", important: false, id: nextId() },
      { label: "Need a break to play Destiny 2", important: false, id: nextId() },
    ]
  }
  
  
  deleteItem = (id) => {
    this.setState(({data}) => {
      // Узнать на каком месте стоит наш элемент
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

  render () {
    return (
      <AppBlock>
        <AppHeader/>
        <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList 
          posts = {this.state.data}
          // Передаем функцию для удаления как props объекта PostList
          onDelete = {this.deleteItem} />
        <PostAddForm
        onAdd={this.addItem} />
      </AppBlock>
    )
  }
}

