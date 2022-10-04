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
    console.log(login);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/" exact>
            {!login && <Redirect to="/homepage" />}
          </Route>

          <Route path="/login">
            <LoginPage onLogin={loginHandler} />
            {login && <Redirect to="/homepage" />}
          </Route>

          <Route path="/homepage">
            {/* {login && <HomePage />}
            {!login && <Redirect to="/login" />} */}

            {login ? <HomePage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
