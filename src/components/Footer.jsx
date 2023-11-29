import React from 'react'
import Logo from '../assets/logo-white.svg'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram} from  'react-icons/fa'

const Footer = () => {
  return (
    <footer  className=' pt-12 md:pb-20  ' style={{backgroundColor:'hsl(260, 8%, 14%)'}}>
      <div className=' grid md:flex flex-row  items-start gap-4'>

        <div className='basis-1/3 justify-center flex'>
          <img src={Logo} alt="" className='text-white' />
        </div>

        <div className='basis-1/3  grid md:flex md:justify-between justify-center  items-start gap-8'>
        <div className='text-white text-center md:text-start'>
            <h2 className='font-semibold '>Features</h2>
            <ul className='md:mt-4 mt-1'>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Link Shortening</li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Branded Links</li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Analytics</li>
            </ul>
          </div>

          <div className='text-white text-center md:text-start'>
            <h2 className='font-semibold '>Resources</h2>
            <ul className='md:mt-4 mt-1'>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Blog</li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Developers </li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Support</li>
            </ul>
          </div>

          <div className='text-white text-center md:text-start'>
            <h2 className='font-semibold '>Company</h2>
            <ul className='md:mt-4 mt-1'>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>About</li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Our Team</li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Careers</li>
              <li className='text-gray-500 font-semibold text-md hover:text-cyan-400 '>Contact</li>

            </ul>
          </div>
          
        </div>

        <div className='basis-1/3  flex gap-8 justify-center text-white '>
          <FaFacebook size={30} className='hover:text-cyan-500'/>
          <FaTwitter size={30} className='hover:text-cyan-500'/>
          <FaPinterest size={30} className='hover:text-cyan-500'/>
          <FaInstagram size={30} className='hover:text-cyan-500'/>
          </div>


      </div>
    </footer>
  )
}

export default Footer