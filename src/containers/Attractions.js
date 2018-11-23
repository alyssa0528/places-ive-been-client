import React, { Component } from 'react';
import AttractionList from '../components/AttractionList'

class Attractions extends Component {
  state = {
    attractions: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/attractions')
      .then(response => response.json())
      .then(attractions => this.setState({ attractions }))
  }

  render() {
    return(
      <div>
        <AttractionList attractions = {this.state.attractions} />
      </div>
    )
  }
}

export default Attractions;
