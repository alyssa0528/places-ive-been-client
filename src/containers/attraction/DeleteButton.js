import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteAttraction } from '../../actions/attractions'

class DeleteButton extends Component {
  state = {
    buttonClicked: false
  }

  clickHandler = (event) => {
    event.preventDefault();
    this.props.deleteAttraction(this.props.attraction.id)
    this.setState({
      buttonClicked: true
    })

  }

  render() {
    if (this.state.buttonClicked === true) {
      return <Redirect to="/places" />
    }

    return(
      <button onClick={this.clickHandler}>Delete!</button>
    )
  }
}

const mapStateToProps = state => {
  return ({
    attraction: state.attraction,
    attractions: state.attractions
  })
}

export default connect(mapStateToProps, { deleteAttraction })(DeleteButton);
