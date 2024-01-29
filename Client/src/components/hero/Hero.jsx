import React from 'react'
import rent from '../../assets/rent.jpg'
import  car from '../../assets/car.jpg'
import food from '../../assets/food.jpg'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
function Hero() {
  const [text] = useTypewriter({
    words: ['Accomodation service', 'Transport service', 'Mess/Tiffin service'],
    loop: false,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  const gradient={
    backgroundImage: "radial-gradient(circle, #95dbea, #afe0f4, #c8e6fa, #ddecfd, #eff3fe, #f5f7fe, #fbfbfe, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)"
  }
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 my-20" style={gradient}>
      <div className="relative inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0" >
        <div className='h-[20rem] w-[20rem] border-2 rounded-full border-[#00b2b2]  overflow-clip absolute top-3 right-3'><img src={rent} alt="" className='h-full w-full object-cover p-1 rounded-full '/></div>
        <div className='h-[20rem] w-[20rem] border-2 rounded-full border-[#048a81]  overflow-clip absolute bottom-12 right-[20%]'><img src={car} alt="" className='h-full w-full object-cover p-1 rounded-full '/></div>
        <div className='h-[25rem] w-[25rem] border-2 rounded-full border-[#dbdab9]  overflow-clip absolute top-10 left-16'><img src={food} alt="" className='h-full w-full object-cover p-1 rounded-full '/></div>
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className=" inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-[#1DE9B6]">
          Where convenience meets comfort!!!
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Explore
            <br className="hidden md:block" />
            Connect{' '}
            <span className="inline-block text-[#3f37c9]">
              and settle with ease
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Welcome to the ultimate student housing and facilities platform. Whether you're a provider offering services or a student in search of the ideal accommodation, transportation, or mess facilities – we've got you covered
          </p>
          <div className="flex items-center">
            <Link to='/property'
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#3f37c9] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Explore
            </Link>
            
          </div>
          <div className='py-10'>
            <div className='text-xl'>You can easily avail <span className='text-[#1DE9B6]'>{text}</span></div>
            {/* <Cursor cursorColor='#3dccc7'/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
