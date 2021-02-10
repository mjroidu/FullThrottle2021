import React, { Component } from 'react';
import './App.css';
import PersonList  from './Components/PersonList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>FullThrottle Labs Assignment</h2>
        <PersonList />
      </div>
    );
  }
}

export default App;


