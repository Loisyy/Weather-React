import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/nkeirulois"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lois Nkeiru
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Loisyy/Weather-React.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-app-ngle.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
