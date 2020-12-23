import React from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="demo-big-content">
      <Navbar />
      <div className="page-content">
        <Main />
      </div>
    </div>
  );
}
export default App;
