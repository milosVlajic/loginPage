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
            <Redirect to="/login"></Redirect>
          </Route>

          <Route path="/login">
            {/* {!login ? <LoginPage onLogin={loginHandler} /> : <HomePage />} */}
            {!login && <LoginPage onLogin={loginHandler} />}
          </Route>
          <Route path="/homepage">{login && <HomePage />}</Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
