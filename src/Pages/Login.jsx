import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../Context/AuthContext'
function Login() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
  const {user, Login} = UserAuth()
  const navigate = useNavigate()

  const SignIn = async (event) => {
    event.preventDefault()
    try{
      await Login(email, password)
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
        <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              <form onSubmit={SignIn} className='w-full flex flex-col py-4'>
                <input  onChange={(event) => setEmail(event.target.value)} className='p-3 my-2 rounded text-black' type="email" placeholder='JohnDoe@gmail.com' autoComplete='email'/>
                <input  onChange={(event) => setPassword(event.target.value)} className='p-3 my-2 rounded text-black' type="password" placeholder='Please enter a strong password' autoComplete='current-password'/>
                <button className='bg-red-700 py-3 my-6 rounded font-bold px-4'>Log In</button>
                <div>
                  <p><input type="checkbox" />Remember Me</p>
                  <p className='py-8'>
                    <span> 
                      Don't have an account?
                    </span> {''}
                    <Link to='/SignUp'>
                       Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login