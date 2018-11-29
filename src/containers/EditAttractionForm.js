import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditAttractionForm extends Component {

  onChangeHandler = event => {
    const { name, value } = event.target
  }

  onSubmitHandler = event => {
    event.preventDefault();

  }

  render() {
    const { name, city, img_url, year_visited, notes } = this.props.attractionFormData;

    return (
      <div>
        <h3>Edit a Place You've Visited</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} readonly />
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input type="text" name="city" value={city} readonly />
          </div>
          <div>
            <label htmlFor="img_url">Image URL: </label>
            <input type="text" name="img_url" value={img_url} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <label htmlFor="year_visited">Year Visited: </label>
            <input type="number" name="year_visited" value={year_visited} readonly />
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

export default connect(mapStateToProps)(EditAttractionForm);
