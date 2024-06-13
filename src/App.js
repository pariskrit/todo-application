import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">
      <h1>Todo-app</h1>
      <SignIn />
      <SignUp />
      <Todo />
    </div>
  );
}

export default App;
