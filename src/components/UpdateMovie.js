import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import '../App.css'

const UpdateMovie = (props) => {
 
  const [name,setName]=useState();
  const [image,setImage]=useState();
  const [actors,setActors]=useState();
  const [producer,setProducer]=useState();
  const [year,setYear]=useState();
  const [rating,setRating]=useState();
  const navigate=useNavigate();
  const id=useParams().id;
  const notify = () => toast('Updated Successfully');
 
  const senReq=async()=>{
    await axios.put(`https://imdb-back-0ugz.onrender.com/auth/${id}`,{name,image,actors,producer,year,rating})
    .then((res)=>res.data)
    
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      senReq().then(()=>navigate('/'))
  }
       
  return (
    <div>
      <div className='profile'>
        <h1>Update</h1>
        
        <form onSubmit={handleSubmit}>
  <div className="mb-3 input">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter movie name' value={name} onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Image Link' value={image} onChange={(e)=>setImage(e.target.value)} required/>
    
    </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Enter Actors Name' value={actors} onChange={(e)=>setActors(e.target.value)} required/>
  </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Enter Producer name'  value={producer} onChange={(e)=>setProducer(e.target.value)} required />
       
    </div>
  <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Movie release year' value={year} onChange={(e)=>setYear(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
    
    <input type="name" className="form-control" id="exampleInputEmail1" placeholder='Rating'  value={rating} onChange={(e)=>setRating(e.target.value)} required />
       
    </div>
  
  <button type="submit" onClick={notify} className="btn btn-primary">Update</button>
  
</form>
 <Toaster/>
</div>
      
    </div>
  )
}

export default UpdateMovie
