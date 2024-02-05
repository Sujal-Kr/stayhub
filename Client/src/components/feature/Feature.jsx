import react from 'react'
import { FaSearchLocation,FaTree } from "react-icons/fa";
import {FaTruckFast} from "react-icons/fa6"
import {IoFastFoodOutline} from 'react-icons/io5'
import { BsBuildings } from "react-icons/bs";
import { Link } from 'react-router-dom';
export const Feature = () => {
  
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Services 
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Where</span>
            </span>{' '}
            convience meets comfort
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <BsBuildings className='text-4xl'/>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Rooms for rent</h6>
            <p className="mb-3 text-sm text-gray-900">
            Browse through a diverse range of PG accommodations, each with detailed information on amenities, pricing, and location. Find the perfect home away from home with ease.
            </p>
            <Link
              href="/property"
              aria-label=""
              className=" main-head transition-all   inline-flex items-center font-semibold  duration-200 "
            >
              Know more
            </Link>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <IoFastFoodOutline className='text-4xl'/>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Hotel and Mess</h6>
            <p className="mb-3 text-sm text-gray-900">
            Enjoy convenient dining with our Mess/Tiffin services. Explore various meal options, ensuring delicious and hassle-free dining for students, making life  more comfortable.
            </p>
            <a
              href="/mess"
              aria-label=""
              className=" text-[#3f37c9]   inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Know more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaTruckFast className='text-4xl'/>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Transport</h6>
            <p className="mb-3 text-sm text-gray-900">
            Experience hassle-free daily commutes with our efficient transport services. We provide convenient transportation options for students, ensuring easy travel from their rooms to college and back.
            </p>
            <a
              href="/vehicle"
              aria-label=""
              className=" text-[#3f37c9]   inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Know more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <FaTree className='text-4xl'/>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Nearyby Places
            </h6>
            <p className="mb-3 text-sm text-gray-900">
            Explore exciting nearby places where students and their friends can unwind after a hectic college week. Whether it's a cozy cafe, a recreational spot, or a vibrant hangout, discover the best spots to relax and rejuvenate.
            </p>
            <a
              href="/property"
              aria-label=""
              className=" text-[#3f37c9]   inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    );
  };