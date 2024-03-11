import React from 'react'
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
function TextBanner({head,subHead,icon}) {
    const background={
        background:"linear-gradient(to bottom,#a2d2ff, #fff)"
    }
  return (
    <div className=''style={background}>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-10">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div href="" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50">
              <MdOutlineRealEstateAgent className='text-4xl text-[#90e0ef]'/>
            </div>
          </div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                    width="52"
                    height="24"
                  />
                </svg>
                
              </span>{' '}
              {head}
            </h2>
            <p className="text-base text-gray-500 md:text-lg">
            {subHead}
            </p>
          </div>
          <div>
            <Link
              to="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#00f5d4] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TextBanner
