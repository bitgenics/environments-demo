import logo from "./logo.svg";
import "./App.css";

import config from "./config";

const APP_BG_COLOR = config.BG_COLOR || "#282c34";

function App() {
  return (
    <div style={{ backgroundColor: APP_BG_COLOR }} className="App">
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
