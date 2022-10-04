import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';

function App() {
  const [login, setLogin] = useState(false);

  const loginHandler = bla => {
    setLogin(true);
    console.log(login);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!login ? <LoginPage onLogin={loginHandler} /> : <HomePage />}
      </header>
    </div>
  );
}

export default App;
