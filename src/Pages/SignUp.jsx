import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth}  from '../Context/AuthContext'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, SignUp} = UserAuth()
  const navigate = useNavigate()
  const handleCredentials = async (event) => {
    event.preventDefault()
    setError('')
    try{
      await SignUp(email, password);
      navigate('/')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }
  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/a3655d04-3a74-4360-a857-4524ef0680d5/NG-en-20220808-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              {error? <p className='text-red-600'>{error}</p>:null}
              <form onSubmit={handleCredentials} className='w-full flex flex-col py-4'>
                <input onChange={(event) => setEmail(event.target.value)} className='p-3 my-2 rounded text-black' type="email" placeholder='JohnDoe@gmail.com' autoComplete='email'/>
                <input onChange={(event) => setPassword(event.target.value)} className='p-3 my-2 rounded text-black' type="password" placeholder='Please enter a strong password' autoComplete='current-password'/>
                <button className='bg-red-700 py-3 my-6 rounded font-bold px-4'>Sign Up</button>
                <div>
                  <p><input type="checkbox" />Remember Me</p>
                  <p className='py-8'>
                    <span> 
                      Already have an account?
                    </span> {''}
                    <Link to='/Login'>
                       Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default SignUp