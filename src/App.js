import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';

function App() {
  const [login, setLogin] = useState(false);

  const loginHandler = bla => {
    setLogin(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact>
            {login ? <HomePage /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            <LoginPage onLogin={loginHandler} />
            {login && <Redirect to="/" />}
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
