import React, { Component } from 'react';
import './App.css';
import Attractions from './Attractions'
import Navbar from '../components/Navbar'

class App extends Component {

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />
        <Attractions />
      </div>
    );
  }
}

export default App;
