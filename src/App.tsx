import React from "react";
import logo from "./img/ivy.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{ width: 128, height: 128 }} />
        <p>Ivy - Inventory Manager</p>
      </header>
    </div>
  );
}

export default App;
