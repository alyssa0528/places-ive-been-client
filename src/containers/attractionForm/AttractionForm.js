//this is for rendering the new attraction form
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { newAttractionFormData } from '../../actions/attractionForm';
import { createAttraction } from '../../actions/attractions';

class AttractionForm extends Component {
  state = {
    submitClicked: false
  }

  onChangeHandler = event => {
    const { name, value } = event.target
    const attractionFormData = {...this.props.attractionFormData, [name]: value}
    //this line hits the attractionForm action
    this.props.newAttractionFormData(attractionFormData)
  }

  onSubmitHandler = event => {
    event.preventDefault();
    //this line hits the createAttraction() action in attractions.js
    this.props.createAttraction(this.props.attractionFormData)
    this.setState({
      submitClicked: true
    })
  }

  render() {
    const { name, city, img_url, year_visited, notes } = this.props.attractionFormData;

    if (this.state.submitClicked === true) {
      return <Redirect to="/places" />
    }

    return(
      <div>
        <h3>Add a Place You've Visited</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input type="text" name="city" value={city} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <label htmlFor="img_url">Image URL: </label>
            <input type="text" name="img_url" value={img_url} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <label htmlFor="year_visited">Year Visited: </label>
            <input type="number" name="year_visited" value={year_visited} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <label htmlFor="notes">Notes: </label>
            <input type="text" name="notes" value={notes} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    attractionFormData: state.attractionFormData
  })
}

export default connect(mapStateToProps, { newAttractionFormData, createAttraction })(AttractionForm);
