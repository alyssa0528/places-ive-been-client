import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Attractions from './attractions/Attractions';
import AttractionPhotoList from './attractions/AttractionPhotoList';
import AttractionFormContainer from './attractionForm/AttractionFormContainer';
import Navbar from '../components/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={AttractionPhotoList} />
            <Route exact path="/places" component={Attractions} />
            <Route exact path="/places/new" component={AttractionFormContainer} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
