import React from 'react';

const AttractionList = (props) => (
  <div>
  <h2>My Places</h2>
  {props.attractions.map(attraction =>
    <div key={attraction.id}>
      <h3>{attraction.name}</h3>
      <img src={attraction.img_url} alt={attraction.img_url}/>
      <p>{attraction.city}</p>
      <p>Year visited: {attraction.year_visited}</p>
      <p>Thoughts: {attraction.notes}</p>
    </div>
  )}
  </div>
)


export default AttractionList;
