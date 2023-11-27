import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='w-4/5 mx-auto py-8 flex justify-between items-center'>
      <div className='flex items-center gap-20'>
      <img src={Logo} alt="logo" width={100} height={50} />
        <ul className='flex gap-12 items-center'>
          <li><a href="#features" className='text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Features</a></li>
          <li><a href="#pricing" className='text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Pricing</a></li>
          <li><a href="Resources" className='text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Resources</a></li>
        </ul>
      </div>

      <div className=' flex items-center gap-8'>
        <button className='transition-all duration-300 text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Login</button>
        <button className='px-6 py-2 font-semibold rounded-full bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 text-white'>Sign Up</button>
      </div>
      </nav>
  )
}

export default Navbar