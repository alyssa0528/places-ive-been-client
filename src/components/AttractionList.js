import React from 'react';
import AttractionCard from './AttractionCard'

const AttractionList = (props) => (
  <div>
    <h2>My Places</h2>
    {props.attractions.map(attraction => <AttractionCard attraction={attraction} key={attraction.id}/>)}
  </div>
)


export default AttractionList;
