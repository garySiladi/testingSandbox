import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
