import React from 'react'
import Illustration from '../assets/illustration-working.svg'

const Banner = () => {
  return (
    <section className='flex my-20 w-full ml-24'>
      <div className='pl-12 py-20 w-1/2'>
        <h1 className='text-7xl capitalize font-bold w-4/5 '>more than just shorter links</h1>
        <p className='text-xl font-medium leading-normal py-2 text-gray-500 w-4/5'>Build you brand's recognition and get detailed insights on how your links are performing</p>
        <button className='bg-cyan-500 px-8 py-4 text-white font-semibold rounded-full my-8'>Get Started</button>
      </div>

      <div>
        <img src={Illustration} alt="" />
      </div>

    </section>
  )
}

export default Banner