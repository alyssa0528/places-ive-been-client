import React, { Component } from 'react';
import { connect } from 'react-redux';
import AttractionCard from './AttractionCard';
import { getAttractions } from '../actions/attractions'

class AttractionList extends Component {
  componentDidMount() {
    this.props.getAttractions()
  }

  render() {
    return (
      <div>
        <h2>My Places</h2>
        {this.props.attractions.map(attraction => <AttractionCard attraction={attraction} key={attraction.id}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    attractions: state.attractions
  })
}

export default connect(mapStateToProps, { getAttractions })(AttractionList);
