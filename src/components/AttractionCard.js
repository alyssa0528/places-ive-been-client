import React from 'react';
import './AttractionCard.css'
import { Link } from 'react-router-dom'

const AttractionCard = ({ attraction }) => (
    <div key={attraction.id} className="AttractionCard">
      <h3 className="AttractionName">{attraction.name}</h3>
      <img src={attraction.img_url} alt={attraction.img_url} className="AttractionImage"/>
      <p><strong>{attraction.city}</strong></p>
      <p>Visited in {attraction.year_visited}</p>
      <Link to={`/places/${attraction.id}`}>See more</Link>
    </div>
)

export default AttractionCard;
