import React from "react";
import Header from './components/layout/header';
import AddTask from './components/addTask';

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <AddTask/>
      </div>
    </>
  );
}

export default App;
