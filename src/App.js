import React from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Navbar />
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}
export default App;
