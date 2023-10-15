import Weather from "./Weather"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Getting started with React</h1>
      <Weather/>
      </header>
      <footer>
        <a
          className="Github-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Lois Nkeiru
        </a>
        </footer>
    </div>
  );
}

export default App;
