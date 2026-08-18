import Logo from './assets/images/Logo.svg';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
