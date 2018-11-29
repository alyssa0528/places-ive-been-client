//this contains the Attraction.js component
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Attraction from '../../components/Attraction';
import EditAttractionForm from '../attractionForm/EditAttractionForm';
import { getAttraction } from '../../actions/attractions'

const API_URL = process.env.REACT_APP_API_URL

class AttractionContainer extends Component {
  //this updates the state and should return just the attraction

  componentDidMount() {
    this.fetchAttraction()
    // fetch(`${API_URL}/attractions/${id}`)
    //   .then(response => response.json())
    //   .then(attraction => dispatch(setAttraction(attraction)))
    // this.props.getAttraction();
  }

  fetchAttraction = () => {
    const id = parseInt(this.props.match.params.id)
    return this.props.getAttraction(id);
  }

  render() {
      console.log(this.props.attraction)
    return(
      <div>
        <Attraction attraction={this.props.attraction} getAttraction={this.props.getAttraction}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return ({
    attraction: state.attraction
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchAttraction: () => {
      dispatch(this.fetchAttraction())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionContainer);
