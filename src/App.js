import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  const user = null;
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <h1>I am a login</h1>
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
