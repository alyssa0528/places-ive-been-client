import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Attractions from './attractions/Attractions';
import AttractionPhotoList from './attractions/AttractionPhotoList';
import AttractionFormContainer from './attractionForm/AttractionFormContainer';
import AttractionContainer from './attraction/AttractionContainer';
import Navbar from '../components/Navbar';


  const Child = ({ match }) => (
    match.params.id
  )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
              <Switch>
                <Route exact path="/" component={AttractionPhotoList} />
                <Route exact path="/places" component={Attractions} />
                <Route exact path="/places/new" component={AttractionFormContainer} />
                <Route path="/places/:id" component={AttractionContainer} />
              </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
