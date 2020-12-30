import React, { useState, useEffect } from 'react';
import TodoListComponent from './todoList.component';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export function TodoListContainer() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setTodoList(json))
  }, []);

  const handleClick = (id) => {
    const thisTodoList = [...todoList];
    setTodoList(thisTodoList.map(element => element.id === id ? { ...element, completed: !element.completed } : element));
  }

  return (
    <div>
      <h2>lista todo:</h2>
      <TodoListComponent todoList={todoList} handleClick={handleClick}></TodoListComponent>
    </div>
  )
}
