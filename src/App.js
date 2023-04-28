import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
  return (
    <div className="App">
      <ItemList />
      <ItemForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
