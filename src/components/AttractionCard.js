import React from 'react';
import './AttractionCard.css'
import { Link } from 'react-router-dom'

const AttractionCard = ({ attraction }) => (
    <div key={attraction.id} className="AttractionCard">
      <h3>{attraction.name}</h3>
      <img src={attraction.img_url} alt={attraction.img_url} className="AttractionImage"/>
      <p>City: {attraction.city}</p>
      <p>Year visited: {attraction.year_visited}</p>
      <Link to={`/places/${attraction.id}`}>See more</Link>
      <p>Thoughts: {attraction.notes}</p>
    </div>
)

export default AttractionCard;
