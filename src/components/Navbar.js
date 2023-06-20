import React from 'react'
import {Link} from 'react-router-dom'
import {BiCameraMovie} from 'react-icons/bi';
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
     
       <span className='nav_title'><BiCameraMovie/>Imdb</span> 
       
      
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/add'>Add Movie</Link>
      <Link className='link' to='/update/:id'>Update Movie</Link>
    </div>
  )
}

export default Navbar
