//this file is for presenting a single attraction at /attractions/:id
import React from 'react';
import AttractionInfo from './AttractionInfo'
import './Attraction.css'

const attraction = ({ attraction }) => {
  return(
    <div className="ImageBox">
      <img src={attraction.img_url} alt={attraction.img_url} style={{maxWidth: 600}}/>
    </div>
  )
}

export default attraction;
