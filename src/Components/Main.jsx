import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
function Main() {
    const [movies, setMovies] = useState([])
    
    //make random selection of movies when the page refreshes 
    const movie = movies[Math.floor(Math.random() * movies.length)]
   
    //make api call to get toprated movies
    useEffect(() => {
      axios.get(requests.toprated).then((res)=>{
        setMovies(res.data.results)
      })
    },[])

    //console.log(movie)
    return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full' >
        
        {/*add gradient color to image */}
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        
        {/*add image and alternative text of movie title */}
        <img 
        className='w-full h-full object-cover' 
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>

        {/* add the play and watch later buttons */}

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p>Released: {movie?.release_date}</p>
        <p className='w-full my-4'>{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Main