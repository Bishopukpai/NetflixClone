import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {UserAuth} from '../Context/AuthContext'
import {db} from '../firebase'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

function SavedContents() {
    const [movies, setMovies] = useState([])
    const {user} = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
 
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() =>{
       onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
        setMovies(doc.data()?.savedContents);
       })
    }, [user?.email])

    const MovieRef = doc(db, 'users', `${user.email}`)

    const deleteMovie = async (passedID) => {
        try{
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(MovieRef, {
                savedContents: result
            })
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
         <h2 className='text-white font-bold left-0'>My Movies</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft 
             onClick={slideLeft}
             className='bg-white rounded-full text-black cursor-pointer hidden group-hover:block left-0' size={40}/>
            <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <div key={id}className='sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 w-full '>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.image}`} alt={item?.title} />
                       <div className='absolute top-0 left-0 w-full h-full hover:bg-black/60 border-2 border-solid opacity-0 hover:opacity-100 text-white font-bold'>
                           <p>{item?.title}</p>
                            <p onClick={() =>deleteMovie(item.id)} className='absolute top-0 right-0 text-white-400'><AiOutlineClose /></p>
                       </div>
               </div>
))}
            </div>
            <MdChevronRight
            onClick={slideRight} 
            className='bg-white rounded-full text-black cursor-pointer hidden group-hover:block right-0' size={40}/>
        </div>
    </>
  )
}

export default SavedContents