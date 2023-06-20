import React from 'react'
import {Link} from 'react-router-dom'

const Movies = (props) => {
  const {_id,name,image,actors,producer,year,rating}=props.movies
  return (
    <div className='movies'>
    <img src={image} alt={name}/>
        <h3>Name:{name}</h3>

    <h3>Actors:{actors}</h3>
    <h3>Producer:{producer}</h3>
    <h3>Year:{year}</h3>
    <div className='flex'>
    <span>Rating:{rating}</span>
    <Link to={`/update/${_id}`} className='update_link'>Update</Link>
    </div>
      
    </div>
  )
}

export default Movies
