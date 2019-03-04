import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//Import Layout
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
