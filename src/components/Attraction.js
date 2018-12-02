//this file is for presenting a single attraction at /attractions/:id
import React from 'react';
import './Attraction.css';
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const attraction = ({ attraction }) => {
  return(
    <div>
      <h3>{attraction.name}</h3>
      <img src={attraction.img_url} alt={attraction.img_url} className="AttractionImage"/>
      <p>City: {attraction.city}</p>
      <p>Year visited: {attraction.year_visited}</p>
      <p>Thoughts: {attraction.notes}</p>
    </div>
  )
}

export default attraction;
