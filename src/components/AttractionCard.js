import React from 'react';

const AttractionCard = ({ attraction }) => (
  <div key={attraction.id}>
    <h3>{attraction.name}</h3>
    <img src={attraction.img_url} alt={attraction.img_url}/>
    <p>City: {attraction.city.name}</p>
    <p>Year visited: {attraction.year_visited}</p>
    <p>Thoughts: {attraction.notes}</p>
  </div>
)

export default AttractionCard;
