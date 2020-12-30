import React from 'react';
import TodoListComponent from './todoList.component';
import useFetch from '../../../hooks/useFetch';


const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export function TodoListContainerCustomHook() {
  const { list, setList } = useFetch(API_URL);

  const handleClick = (id) => {
    const thisTodoList = [...list];
    setList(thisTodoList.map(element => element.id === id ? { ...element, completed: !element.completed } : element));
  }

  return (
    <div>
      <h2>lista todo:</h2>
      <TodoListComponent todoList={list} handleClick={handleClick}></TodoListComponent>
    </div>
  )
}
