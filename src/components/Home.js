import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Movies from './Movies'

const Home = () => {
    const [movies,setMovies]=useState('');
    const fetchData=async()=>{
         return  await axios.get("https://imdb-back-0ugz.onrender.com/auth").then((res)=>res.data)
    }
    useEffect(()=>{
        fetchData().then((data)=>{setMovies(data.movies)})
        
    },[movies])
  return (
    <div className='container'>
      
        {movies && movies.map((item,i)=>(
            <div className='movies'key={i}><Movies movies={item}/></div>
        ))}
      
    </div>
  )
}

export default Home
