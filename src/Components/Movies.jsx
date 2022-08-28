import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import {UserAuth} from '../Context/AuthContext'
import {db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

function Movies({item}) {
    const [fave, setFave] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} = UserAuth()

    const movieId = doc(db, 'users', `${user?.email}`)

    const savedContents = async () => {
      if(user?.email){
        setFave(!fave)
        setSaved(true)

        await updateDoc(movieId,{
          savedContents : arrayUnion({
            id: item.id, 
            title: item.title,
            image: item.backdrop_path
          })
        })
      }else{
          alert('Please Log in to save a movie')
      }
    }
  return (
    <>
        <div className='sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 w-full '>
             <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.id} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 border-2 border-solid opacity-0 hover:opacity-100 text-white font-bold'>
                    <p>{item?.title}</p>
                        <p onClick={savedContents }>
                        {fave? <FaHeart className='absolute top-4 right-4 text-white font-bold'/>: <FaRegHeart className='absolute top-4 right-4 text-white font-bold'/>}
                        </p>
                </div>
        </div>
    </>
  )
}

export default Movies