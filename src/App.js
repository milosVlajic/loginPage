import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
