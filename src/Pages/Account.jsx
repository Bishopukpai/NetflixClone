import React from 'react'
import SavedContents from '../Components/SavedContents'

function Account() {
  return (
    <>
    <div className='w-full text-white'>
         <img className='w-full h-[400px]  object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/a3655d04-3a74-4360-a857-4524ef0680d5/NG-en-20220808-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 h-[550px] w-full'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold text-white'>My Movies</h1>
          </div>
        </div>
    </div>
    <SavedContents/>
    </>
  )
}

export default Account