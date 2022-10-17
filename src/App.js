import logo from './logo.svg';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import CarCharger from './page/CarCharger';
import AboutUs from './page/AboutUs';

const queryClient = new QueryClient();

function App() {
  const [login, setLogin] = useState(true);

  const loginHandler = () => {
    setLogin(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
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

            <Route path="/aboutus">
              <AboutUs />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
