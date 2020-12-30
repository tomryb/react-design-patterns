import React, { useState, useEffect } from 'react';
import UsersListComponent from './usersList.component';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export function UsersListContainer() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setUsersList(json))
  }, [])

  return (
    <div>
      <h2>lista użytkowników</h2>
      <UsersListComponent usersList={usersList}></UsersListComponent>
    </div>
  )
}
