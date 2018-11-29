import React, { Component } from 'react';
import Attraction from '../components/Attraction';
import EditAttractionForm from './EditAttractionForm';
import { connect } from 'react-redux';
import { getAttraction } from '../actions/attractions'

class AttractionContainer extends Component {
  //this updates the state
  componentDidMount() {
    this.props.getAttraction();
  }

  // clickHandler = event => {
  //   event.preventDefault();
  //
  //   render() {
  //     return(
  //       <div>
  //         <EditAttractionForm />
  //       </div>
  //     )
  //   }
  // }

  render() {
      console.log(this.props)
    return(
      <div>

        <Attraction attraction={this.props.attraction}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return ({
    attraction: state.attraction
  })
}

export default connect(mapStateToProps, { getAttraction })(AttractionContainer);
