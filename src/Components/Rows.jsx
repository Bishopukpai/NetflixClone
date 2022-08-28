import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './Movies';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import requests from '../Requests';

const Rows = ({title, URL, id}) => {
    const [movies, setMovie] = useState([])
    
    useEffect(() => {
        axios.get(URL).then((response) => {
            setMovie(response.data.results)
        })
    },[URL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    
    const slideRight = () => {
        var slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <>
        <h2 className='text-white font-bold left-0'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
             onClick={slideLeft}
             className='bg-white rounded-full text-black cursor-pointer hidden group-hover:block left-0' size={40}/>
            <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movies key={id} item={item} />
))}
            </div>
            <MdChevronRight
            onClick={slideRight} 
            className='bg-white rounded-full text-black cursor-pointer hidden group-hover:block right-0' size={40}/>
        </div>
    </>
  )
}

export default Rows