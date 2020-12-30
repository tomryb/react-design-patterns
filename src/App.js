import { UsersListContainer } from './components/usersList/usersList.container';
import { TodoListContainer } from './components/todoList/todoList.container';

function App() {
  return (
    <div>
      {/* zadanie1 */}
      <UsersListContainer />
      <TodoListContainer></TodoListContainer>
    </div>
  );
}

export default App;
