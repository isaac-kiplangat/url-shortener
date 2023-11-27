import React from 'react'
import InputBackground from '../assets/bg-shorten-desktop.svg'

const UrlInput = () => {
  return (
    <section className='w-3/4 mx-auto p-12 rounded-lg'   style={{ backgroundImage: `url(${InputBackground})`, backgroundPosition: 'cover', backgroundColor: 'hsl(257, 27%, 26%)' }}>
    
    <form className='flex gap-4 items-center  mx-auto '>
      <input type="text" aria-label="Enter your URL" className='p-4 w-2/3 rounded-lg ' />
      <button type="submit" aria-label="Shorten URL" 
      className='bg-cyan-500 text-white font-semibold py-4 px-12 rounded-lg'>
        Shorten it
      </button>
    </form>
    </section>
  )
}

export default UrlInput