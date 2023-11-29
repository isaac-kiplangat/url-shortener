import React from 'react'
import Illustration from '../assets/illustration-working.svg'

const Banner = () => {
  return (
    <section className='  md:flex items-center  w-full mx-4 md:ml-24'>
      <div className='block md:hidden'>
        <img src={Illustration} alt="" width={400} height={400}  className='  w-full translate-y-4  mt-0' />
      </div>
      <div className=' pt-8 flex flex-col items-center md:block  md:ml-12 md:w-1/2'>
        <h1 className='md:text-6xl text-4xl text-center md:text-start capitalize font-bold w-4/5 '>more than just shorter links</h1>
        <p className='text-xl font-normal md:font-medium text-center md:text-start leading-normal py-2 text-gray-500 w-4/5'>Build you brand's recognition and get detailed insights on how your links are performing</p>
        <button className='bg-cyan-500 px-8 py-3  hover:bg-cyan-300 transition-all duration-300   text-white font-semibold rounded-full my-4'>Get Started</button>
      </div>

      <div className='md:block hidden'>
        <img src={Illustration} alt="" width={400} height={400}  className='  w-full translate-y-4  mt-0' />
      </div>

    </section>
  )
}

export default Banner