//this is for rendering all of the AttractionCard elements on "My Places"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import AttractionCard from '../../components/AttractionCard';
import { getAttractions } from '../../actions/attractions'


class AttractionList extends Component {
  componentDidMount() {
    this.props.getAttractions()
  }

  render() {
    console.log(this.props.attractions)
    return (
        <div>
          <h2>My Places</h2>
          {this.props.attractions.map(attraction =>
            <div>
            <AttractionCard attraction={attraction} key={attraction.id}>
              <Link to={`/places/:id`} />
            </AttractionCard>
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
