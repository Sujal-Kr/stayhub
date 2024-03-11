import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {MdOutlineCurrencyRupee} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
function MessCard({item}) {
    const navigate=useNavigate()
  return (
    <div className="max-w-xs  bg-white border shadow rounded overflow-clip  hover:translate-y-2 duration-500">
    <div className='p-1'>
        <img className="  h-48 w-full object-cover object-center" src={item.ImageUrl} alt="" />
    </div>
    <div className="p-5">
        <div className='flex items-center gap-2 '>
            <div className='h-10 flex items-center justify-center w-10 rounded-full bg-slate-100'>{item.Owner.substring(0,1)}</div>
            <p className=' font-semibold'>{item.Owner}</p>
        </div>
        <div className='text-slate-700  text-xs my-3 flex flex-col gap-1'>
            <p className='text-xl'>{item.BusinessName}</p>
            <p>{item.reviews.length+" Reviews"}</p>
            <p className='flex items-center'><MdOutlineCurrencyRupee/>{item.price}</p>
            <a href={`https://wa.me/${item.phone}`} target='_blank' className='text-xl text-green-400'><FaWhatsapp/></a>
        </div>
        
        <div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3f37c9] rounded-sm   focus:ring-4 focus:outline-none focus:ring-blue-300  " onClick={()=>navigate(`/profile/${item.OnnerId}`)}>
            Contact
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"  fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
        </div>
    </div>

  )
}

export default MessCard
