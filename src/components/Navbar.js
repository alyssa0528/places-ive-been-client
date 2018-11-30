import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import '../index.css'

const navbar = (props) => {
  return (
    <div>
      <h1 className="appHeader">Places I've Been</h1>
      <Link to='/' className="Navbar">Home</Link>
      <Link to='/places' className="Navbar">My Places</Link>
      <Link to='/places/new' className="Navbar">Add a Place</Link>
    </div>
  )
}

export default navbar;
