import React from 'react';
import './Attraction.css'

const attractionInfo = ({ attraction }) => {
  return(
    <div className="InfoBox">
      <h3 className="AttractionName">{attraction.name}</h3>
      <p><strong>City:</strong> {attraction.city}</p>
      <p><strong>Year visited:</strong> {attraction.year_visited}</p>
      <p><strong>Thoughts:</strong> {attraction.notes}</p>
    </div>
  )
}

export default attractionInfo;
