import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAttraction } from '../actions/attractions'

class DeleteButton extends Component {

  // componentDidMount() {
  //   const id = parseInt(this.props.match.params.id)
  // }

  clickHandler = (event) => {
    event.preventDefault();
    //console.log(this.props.attraction.id)
    this.props.deleteAttraction(this.props.attraction.id)
  }

  render() {
    return(
      <button onClick={this.clickHandler}>Delete!</button>
    )
  }
}

const mapStateToProps = state => {
  return ({
    attraction: state.attraction
  })
}

export default connect(mapStateToProps, { deleteAttraction })(DeleteButton);
