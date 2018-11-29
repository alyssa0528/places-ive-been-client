//this is for rendering the AttractionPhotocard elements on Home page
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AttractionPhotocard from '../../components/AttractionPhotocard';
import { getAttractions } from '../../actions/attractions'

class AttractionPhotoList extends Component {
  componentDidMount() {
    this.props.getAttractions()
  }

  render() {
    return (
      <div>
        {this.props.attractions.map(attraction => <AttractionPhotocard attraction={attraction} key={attraction.id}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    attractions: state.attractions
  })
}

export default connect(mapStateToProps, { getAttractions })(AttractionPhotoList);
