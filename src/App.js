import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './create';
import List from './list/list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="App">
      <h1>Todo List</h1>
      <Create/>
      <List/>
      </div>
    );
  }
}

export default App;
