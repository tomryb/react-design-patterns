import { UsersListContainer } from './components/zadanie1/usersList/usersList.container';
import { TodoListContainer } from './components/zadanie1/todoList/todoList.container';
import { TodoListContainerCustomHook } from './components/zadanie2/todoList/todoList.container';
import { UsersListContainerCustomHook } from './components/zadanie2/usersList/usersList.container';

function App() {
  return (
    <div>
      <h2>zadanie1</h2>
      <UsersListContainer />
      <TodoListContainer></TodoListContainer>

      <h2>zadanie2</h2>
<UsersListContainerCustomHook></UsersListContainerCustomHook>
      <TodoListContainerCustomHook></TodoListContainerCustomHook>
    </div>
  );
}

export default App;
