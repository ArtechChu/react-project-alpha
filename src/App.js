import React, { Component } from 'react';
import ToDoList from './TodoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
