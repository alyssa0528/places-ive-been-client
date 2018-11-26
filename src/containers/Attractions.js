import React, { Component } from 'react';
import AttractionList from '../components/AttractionList'
import AttractionForm from './AttractionForm'

class Attractions extends Component {
  state = {
    attractions: []
  }

  render() {
    return(
      <div>
        <AttractionList attractions = {this.state.attractions} />
        <AttractionForm />
      </div>
    )
  }
}

export default Attractions;
