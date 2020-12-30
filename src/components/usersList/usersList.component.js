import React from 'react'

export default function UsersListComponent({ usersList }) {
  const renderUsersList = () => usersList.map(user => (
    <div key={user.id}>{user.name}</div>
  ));
  return (
    <div>
      {renderUsersList()}
    </div>
  )
}
