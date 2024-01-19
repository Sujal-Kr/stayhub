import React from 'react'
import sideImage from '../../assets/bgcover.jpg'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 my-20">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={sideImage}
          alt="random"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Your Home Away From Home Starts Here
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Explore
            <br className="hidden md:block" />
            Connect{' '}
            <span className="inline-block text-deep-purple-accent-400">
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
        </div>
      </div>
    </div>
  )
}

export default Hero
