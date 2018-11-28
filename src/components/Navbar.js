import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {
  return (
    <div>
      <h1>Places I've Been</h1>
      <Link to='/'>Home</Link>
      <Link to='/places'>My Places</Link>
      <Link to='/places/new'>Add a Place</Link>
    </div>
  )
}

export default navbar;
