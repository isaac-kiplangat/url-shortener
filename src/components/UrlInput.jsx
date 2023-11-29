import React, { useState } from 'react'
import InputBackground from '../assets/bg-shorten-desktop.svg'

const UrlInput = () => {
  const [originalUrl, setOriginalUrl]= useState('')
  const [shortUrl, setShortUrl]= useState('')


  const shortenUrl=(e)=>{
    e.preventDefault();
    fetch('http://localhost:3000/Shorten', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({originalUrl}),
    })
    .then(res => res.json())
    .then((data)=> {
      console.log(data)
      setShortUrl(`http://Shorten/${data.id}`)
    })
    .catch((err)=>{
      console.error('Error shortening URL:',err);
    })
  }
  return (
    <section>
      <div className=' w-full mx-4 md:w-2/3 md:mx-36 p-4  md:p-12 rounded-xl'   style={{ backgroundImage: `url(${InputBackground})`, backgroundPosition: 'cover', backgroundColor: 'hsl(257, 27%, 26%)' }}>
    
    <form onSubmit={shortenUrl} className=' grid md:flex gap-4 items-center md:px-4  mx-auto '>
      <input 
      type="text" 
      aria-label="Enter your URL" 
      name="url" 
      value={originalUrl} 
      onChange={(e)=>setOriginalUrl(e.target.value)} 
      className='px-4 py-3 text-xl text-gray-500 w-full md:w-3/4 outline-none rounded-md font-light ' placeholder='enter url' />
      <button type="submit" aria-label="Shorten URL" 
      className='bg-cyan-500  hover:bg-cyan-300 transition-all duration-300  text-white font-semibold py-4 px-[5%] rounded-lg'>
        Shorten it
      </button>
    </form>
    </div>
    {shortUrl &&  (
    <div className='text-black w-2/3 mx-20  flex justify-between my-8 p-4 bg-white'>
      <p>{originalUrl}</p>
      <div className='flex justify-between'>
      <p>{shortUrl}</p>
      <button className='px-4 py-1 bg-cyan-500 text-white'>copy</button>
      </div>
      
    </div>
    )}
    </section>
  )
}

export default UrlInput