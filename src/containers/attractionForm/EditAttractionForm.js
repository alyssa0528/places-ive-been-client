//this renders the edit attraction form
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAttraction } from '../../actions/attractions'

class EditAttractionForm extends Component {

  // componentDidMount() {
  //   const id = parseInt(this.props.match.params.id)
  //   debugger
  //   this.props.getAttraction(id)
  // }

  onChangeHandler = event => {
    const { name, value } = event.target
  }

  onSubmitHandler = event => {
    event.preventDefault();

  }

// need to GET attraction's info, populate it into the form (call GET ATTRACTION)
// then upon submit, need to send an UPDATE_ATTRACTION action type and update the state

  render() {
    const { name, city, img_url, year_visited, notes } = this.props.attraction;

    return (
      <div>
        <h3>Edit a Place You've Visited</h3>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={name} onChange={this.onChangeHandler} />
          </div>
          <div>
            <label htmlFor="city">City: </label>
            <input type="text" name="city" value={city} onChange={this.onChangeHandler} />
          </div>
          <div>
            <label htmlFor="img_url">Image URL: </label>
            <input type="text" name="img_url" value={img_url} onChange={this.onChangeHandler}/>
          </div>
          <div>
            <label htmlFor="year_visited">Year Visited: </label>
            <input type="number" name="year_visited" value={year_visited} onChange={this.onChangeHandler} />
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
    attraction: state.attraction
  })
}

export default connect(mapStateToProps)(EditAttractionForm);
