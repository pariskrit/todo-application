import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/elements/Header';
import { createContext, useState } from 'react';
import { ADMIN_CREDENTIALS } from './helpers/constants';


export const UserContext = createContext();
function App() {

  const [users, setUsers] = useState([ADMIN_CREDENTIALS])

  return (
    <UserContext.Provider value={[users, setUsers]} >
      <BrowserRouter basename='/'>
        <div className="app">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>



        </div>
      </BrowserRouter>

    </UserContext.Provider >


  );
}

export default App;
