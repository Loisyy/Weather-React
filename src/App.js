import React from "react";
import Weather from "./Weather";
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
          href="https://github.com/Loisyy/Weather-React.git"
          target="_blank"
          rel="noopener noreferrer" alt=" Source code"
        >
          Lois Nkeiru
        </a>
      </footer>
    </div>
  );
}

export default App;
