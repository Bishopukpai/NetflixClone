import React from 'react'
import Main from '../Components/Main'
import Rows from '../Components/Rows'
import requests from '../Requests'


function Home() {
  return (
    <>
      <Main/>
      <Rows id='0f' title='Upcoming'  URL= {requests.Upcoming} />
      <Rows id='0fx' title= 'New Movies' URL ={requests.NewMovies} />
      <Rows id='0fy' title ='Popular' URL = {requests.Popular} />
      <Rows id='0fz' title='Top rated' URL = {requests.toprated} />
    </>
  )
}

export default Home