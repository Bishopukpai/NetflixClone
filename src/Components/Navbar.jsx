import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth}  from '../Context/AuthContext'
function Navbar() {
const {user, LogOut} = UserAuth()
const navigate = useNavigate()

const LogoutFunction = async () => {
  try {
     await LogOut();
     navigate('/')
  }catch(error){
    console.log(error)
  }
}

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
       <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1> 
      </Link>
       {user?.email ? 
       <div>
       <Link to='/account'>
           <button className='text-white pr-4'>Account</button>
       </Link>
           <button onClick={LogoutFunction}className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Log Out</button>
      </div>:
      <div>
      <Link to='/Login'>
          <button className='text-white pr-4'>Sign In</button>
      </Link>
      <Link to='/SignUp'>
          <button className='bg-red-600 px-6 py-2 text-white rounded cursor-pointer'>Sign Up</button>
      </Link>
     </div>}
    </div>
  )
}

export default Navbar