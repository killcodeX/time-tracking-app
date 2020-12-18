import React from "react";
import Header from "./components/layout/header";
import MasterTaskBar from './components/taskBar/masterTaskBar';
import DisplayTask from "./components/displayTask";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <MasterTaskBar />
        <hr className="hr" />
        <DisplayTask />
      </div>
    </Provider>
  );
}

export default App;
