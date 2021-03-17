import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
