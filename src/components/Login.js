import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);

  const handleEvent = ()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div  className='flex flex-col gap-20'>
    
      <img className='absolute  -z-10 min-h-[100vh] w-full object-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg'></img>
      <Header/>
      <div className='bg-black bg-opacity-85 p-16 mx-auto  min-w-[450px] rounded-md'>
        <h1 className='text-4xl font-semibold text-white mb-10'>{isSignIn?"Sign In":"Sign Up"}</h1>
        <form className='flex flex-col gap-8 mb-6'>
          {!isSignIn && <input type='text' placeholder='Full Name' className='p-4 bg-[#454545] text-white rounded-sm'/>}
          <input type='email' placeholder='Email' className='p-4 bg-[#454545] text-white rounded-sm'/>
          <input type='password' placeholder='Password' className='p-4 bg-[#454545] text-white rounded-sm'/>
          <button className='p-4 bg-[#e50914] bg-opacity-400 text-xl font-bold text-white rounded-md mt-4'>{isSignIn?"Sign In":"Sign Up"}</button>
        </form>
        <p><span className='text-gray-400'>{isSignIn?"New to Netflix?":"Already registered?"} </span> <span className='text-white hover:underline cursor-pointer' onClick={handleEvent}>{isSignIn?"Sign Up now.":"Sign In now."}</span> </p>
      </div>
    </div>
  )
}

export default Login