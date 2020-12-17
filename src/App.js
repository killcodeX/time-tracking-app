import React from "react";
import Header from "./components/layout/header";
import AddTask from "./components/addTask";
import DisplayTask from "./components/displayTask";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddTask />
        <hr className="hr" />
        <DisplayTask />
      </div>
    </>
  );
}

export default App;
