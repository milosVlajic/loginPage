import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import CarCharger from './page/CarCharger';

function App() {
  const [login, setLogin] = useState(false);

  const loginHandler = () => {
    setLogin(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/login">
            <LoginPage onLogin={loginHandler} login={login} />
          </Route>

          <Route path="/" exact>
            <HomePage login={login} />
          </Route>

          <Route path="/carcharger">
            <CarCharger />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
