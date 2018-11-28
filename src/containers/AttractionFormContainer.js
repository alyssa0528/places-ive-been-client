import React, { Component } from 'react';
import AttractionForm from './AttractionForm'
import AttractionList from '../components/AttractionList'

class AttractionFormContainer extends Component {
  render() {
    return (
      <div>
        <AttractionForm />
        <AttractionList />
      </div>
    )
  }
}

export default AttractionFormContainer;
