import React from 'react';
import './AttractionCard.css'

const AttractionCard = ({ attraction }) => (
  <div key={attraction.id} className="AttractionCard">
    <h3>{attraction.name}</h3>
    <img src={attraction.img_url} alt={attraction.img_url} className="AttractionImage"/>
    <p>City: {attraction.city}</p>
    <p>Year visited: {attraction.year_visited}</p>
    <p>Thoughts: {attraction.notes}</p>
  </div>
)

export default AttractionCard;
