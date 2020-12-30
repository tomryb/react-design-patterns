import React from 'react';
import UsersListComponent from './usersList.component';
import useFetch from '../../../hooks/useFetch';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export function UsersListContainerCustomHook() {
  const { list, loading, error } = useFetch(API_URL);

  if(loading) {
    return (<div>Ładowanie...</div>);
  }

  if(error) {
    return (<div>Błąd ładowania</div>);
  }

  return (
    <div>
      <h2>lista użytkowników</h2>
      <UsersListComponent usersList={list}></UsersListComponent>
    </div>
  )
}
