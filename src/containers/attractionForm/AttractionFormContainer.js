//this is for rendering the AttractionForm and AttractionList components
import React, { Component } from 'react';

import AttractionForm from './AttractionForm'
import AttractionList from '../attractions/AttractionList'

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
