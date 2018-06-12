import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/to_do_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List App</h1>
        </header>
        <p className="App-intro">
          <ToDoList />
          </p>
      </div>
    );
  }
}

export default App;
