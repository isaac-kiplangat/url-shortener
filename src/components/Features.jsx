import React from 'react'
import Graph from '../assets/icon-brand-recognition.svg'
const Features = () => {
  return (
    <section className=' bg-gray-300 h-[170vh] md:h-[120vh] pt-20'>
      <div className='w-4/5 mx-auto'>
      <div className='py-20 w-3/4 md:w-1/3 mx-auto text-center '>
      <h1 className='text-black/90 text-3xl font-bold'>Advanced Statistics</h1>
      <p className=' py-4 text-md font-medium text-gray-400'>Track how your links are performing across the web with our advanced statistic dashboard</p>
      </div>



<div className='pt-20 mt-16  '>
<div className=' hidden md:block mt-8 md:w-full mx-auto h-3 bg-cyan-500'></div>
<div className=' h-[600px]  md:hidden mx-auto w-3 bg-cyan-500'></div>


      <div className=' -translate-y-[70%]  md:-translate-y-[50%] md:py-20 grid md:grid-cols-3 md:gap-8 gap-16  '>

        <div className='bg-white px-4 rounded-md hover:shadow-lg hover:-translate-y-4 transition-all duration-1000 py-4 text-center md:text-start'>
          <div className=' -translate-y-[70%] md:ml-4 mx-auto p-2 w-16 h-16 rounded-full bg-violet-950'>
            <img src={Graph} alt="" className='object-contain m-1 w-3/4' />
          </div>
          <h2 className='md:mt-8 mt-0 p-4 tracking-wider  font-semibold text-violet-[hsl(260, 8%, 14%)] text-lg'>Brand Recognition</h2>
          <p className='text-md px-4 mr-4 pb-8  text-gray-500'>Boost your brand recognition with each click. Generic links dont mean a thing.
            Branded links help instill confidence in your content
          </p>
        </div>

        <div className='bg-white px-4 rounded-md py-4 hover:shadow-lg hover:translate-y-6 transition-all duration-1000 text-center md:text-start md:translate-y-10'>
          <div className=' -translate-y-[70%] md:ml-4 mx-auto p-2 w-16 h-16 rounded-full bg-violet-950'>
            <img src={Graph} alt="" className='object-contain m-1 w-3/4' />
          </div>
          <h2 className='md:mt-8 mt-0 p-4 tracking-wider  font-semibold text-violet-[hsl(260, 8%, 14%)] text-lg'>Detailed Records</h2>
          <p className='text-md px-4 mr-4 pb-8  text-gray-500'>Gain insights into who is clicking your links. 
          Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className='bg-white px-4 rounded-md hover:shadow-lg hover:translate-y-16 transition-all duration-1000 py-4 text-center md:text-start translate-y-20'>
          <div className=' -translate-y-[70%] md:ml-4 mx-auto p-2 w-16 h-16 rounded-full bg-violet-950'>
            <img src={Graph} alt="" className='object-contain m-1 w-3/4' />
          </div>
          <h2 className='md:mt-8 mt-0 p-4 tracking-wider   font-semibold text-violet-[hsl(260, 8%, 14%)] text-lg'>Fully Customizable</h2>
          <p className='text-md px-4 mr-4 pb-8  text-gray-500'>Improve brand awareness and content 
          discoverability through customizable links, supercharging audience engagement.
          </p>
        </div>


      </div>

      </div>

      </div>
    </section>
  )
}

export default Features