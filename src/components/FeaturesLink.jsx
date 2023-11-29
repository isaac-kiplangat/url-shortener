import React from 'react'
import FeaturesBg from '../assets/bg-boost-desktop.svg'

const FeaturesLink = () => {
  return (
    <section className='w-full py-8 h-[40vh] bg-cover' style={{backgroundImage:`url(${FeaturesBg})`, backgroundPosition:'cover',backgroundColor:'hsl(257, 27%, 26%)'}}>
     <div className='pt-16 flex  flex-col justify-center   '>
      <h1 className='text-4xl md:text-5xl font-bold text-white text-center'>Boost your links today</h1>
      <button className='bg-cyan-500 px-4 py-4 mx-auto w-40 hover:bg-cyan-300 transition-all duration-300  text-white font-semibold rounded-full my-8'>Get Started</button>
      </div>
    </section>
  )
}

export default FeaturesLink