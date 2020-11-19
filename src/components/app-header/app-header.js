import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
      font-size: 26px;
      color: ${props => props.colored ? 'red' : 'black'};
      :hover {
        color: blue;
        }
      }
  h2 {
    font-size: 1.2rem;
    color: grey;
    }
`

const AppHeader = () => {
  return (
  // В стилях передано условие: если у элемента есть свойство colored - он будет красный
  // Также созданный ранее как div элемент можно превраттить в ссылку, если добавить к названию элемента в JSX значение as="a"
    <Header>
      <h1>Mikhail Liakhovets</h1>
      <h2>5 записей, из них понравилось 0</h2>
    </Header>
  
  )
}

export default AppHeader;