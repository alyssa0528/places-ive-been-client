//this contains the Attraction.js component (for the /places/:id view)
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Attraction from '../../components/Attraction';
import EditAttractionForm from '../attractionForm/EditAttractionForm';
import { getAttraction } from '../../actions/attractions'
import { setAttraction } from '../../actions/attractions'

const API_URL = process.env.REACT_APP_API_URL

class AttractionContainer extends Component {
  //this updates the state and should return just the attraction
  componentDidMount() {
    const id = parseInt(this.props.match.params.id)
    this.props.getAttraction(id)
  }

  render() {
    return(
      <div>
        <Attraction attraction={this.props.attraction} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return ({
    attraction: state.attraction
  })
}

export default connect(mapStateToProps, { getAttraction, setAttraction })(AttractionContainer);
