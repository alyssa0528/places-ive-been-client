import React, { Component } from 'react';
import AttractionList from '../components/AttractionList'
import AttractionForm from './AttractionForm'

class Attractions extends Component {

  render() {
    return(
      <div>
        <AttractionList />
        <AttractionForm />
      </div>
    )
  }
}

export default Attractions;
