import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './containers/navBar';
import { ChoicesMenu } from './containers/choicesMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ChoicesMenu />
      </div>
    );
  }
}

export default App;
