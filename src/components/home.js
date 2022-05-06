import React from 'react'
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div>
        <h1> Home </h1>
        <Link to=''>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/form'>Form</Link>
    </div>
  )
}
