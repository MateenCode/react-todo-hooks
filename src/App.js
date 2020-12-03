import React, { Component } from "react";
// Components
import TodoList from "./components/TodoList";
//CSS
import "./css/App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
