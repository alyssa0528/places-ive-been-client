import React, { Component } from 'react';
import AttractionList from '../components/AttractionList'

const API_URL = process.env.REACT_APP_API_URL

class Attractions extends Component {
  state = {
    attractions: []
  }

  componentDidMount() {
    fetch(`${API_URL}/attractions`)
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
