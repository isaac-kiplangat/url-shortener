import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {TiThMenu} from 'react-icons/ti'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className=' mx-4 md:w-4/5 md:mx-auto py-8 flex justify-between items-center'>
      <div className='flex items-center gap-20'>
      <img src={Logo} alt="logo" width={100} height={50} />
        <ul className=' hidden md:flex gap-12 items-center'>
          <li><a href="#features" className='text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Features</a></li>
          <li><a href="#pricing" className='text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Pricing</a></li>
          <li><a href="Resources" className='text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Resources</a></li>
        </ul>
      </div>

      <div className='hidden md:flex items-center gap-8'>
        <button className='transition-all duration-300 text-gray-500 font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Login</button>
        <button className='px-6 py-2 font-semibold rounded-full bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 text-white'>Sign Up</button>
      </div>
      
      <TiThMenu size={30} onClick={handleOpenMenu} className={`md:hidden block ${isOpen ? 'text-cyan-500':'text-gray-500'}`}/>
       {/**Mobile nav */}
       {isOpen && (
       <nav className=' absolute z-30  rounded-lg top-20 w-4/5 p-4 right-4 mx-auto ' style={{backgroundColor:'hsl(257, 27%, 26%)'}}>
       <ul className='  grid text-center gap-8 my-8 items-center'>
          <li><a href="#features" className='text-white font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Features</a></li>
          <li><a href="#pricing" className='text-white font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Pricing</a></li>
          <li><a href="Resources" className='text-white font-semibold text-md hover:text-cyan-400 hover:border-b-2 border-cyan-900'>Resources</a></li>
        </ul>
        <hr className='bg-gray-600'/>
        <div className=' flex flex-col items-center gap-8 my-8'>
        <button className='transition-all duration-300 text-white font-semibold text-md hover:text-cyan-400 '>Login</button>
        <button className='px-6 w-full py-2 font-semibold rounded-full bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 text-white'>Sign Up</button>
      </div>
       </nav>
       )}
      </nav>
  )
}

export default Navbar