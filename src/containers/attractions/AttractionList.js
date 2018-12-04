//this is for rendering all of the AttractionCard elements on "My Places"
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AttractionCard from '../../components/AttractionCard';
import { getAttractions } from '../../actions/attractions';

class AttractionList extends Component {
  componentDidMount() {
    this.props.getAttractions()
  }

  render() {
    //console.log(this.props.attractions) returns array of all attractions with all info
    return (
        <div>
          <h2 className="myPlaces">My Places</h2>
          {this.props.attractions.map(attraction =>
            <div key={attraction.id}>
              <AttractionCard attraction={attraction} key={attraction.id} />
            </div>)}
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
