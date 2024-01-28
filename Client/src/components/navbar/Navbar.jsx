import React,{useState} from 'react'
import { CiMenuFries,CiSearch } from "react-icons/ci";
import { MdClose,MdOutlineRealEstateAgent } from "react-icons/md";
import { IoIosBookmark } from "react-icons/io";
// import Avatar from '@mui/material/Avatar';
import { PiUserCirclePlus } from "react-icons/pi";
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [mode,setMode]=useState(false)
    
  return (
    <div className='nav-cont  py-3 flex items-center justify-between px-6 '>
      <div className="nav-icon flex items-center text-2xl">
        <MdOutlineRealEstateAgent className='text-5xl ' />
        <Link to='/' className='text-[#3f37c9] normal-case main-head  font-[1000]'>StayHub</Link>
      </div>
      <div className={mode?"nav-list active text-md   text-gray-400":"nav-list text-md   text-gray-400"}>
        <div className="icon-cont">
            <MdClose className='block md:hidden' onClick={()=>setMode(!mode)}/>
        </div>
        <Link onClick={()=>setMode(!mode)}className='active:text-red-300'to='/property'>Flats</Link>
        <Link onClick={()=>setMode(!mode)}className='active:text-red-300'to='/mess'>Mess</Link>
        <Link onClick={()=>setMode(!mode)}className='active:text-red-300'to='/vehicle'>Vehicles</Link>
        <Link onClick={()=>setMode(!mode)}className='active:text-red-300'to='/proplisting'>Listing</Link>

      </div>
      <div className="search-cont relative hidden md:block">
        <button className='px-6 py-2 shadow-full rounded  bg-[#3f37c9]  text-white'><Link to='/login'>Login</Link></button>
        
      </div>
      <div className="action-btn flex items-center gap-4">
        <PiUserCirclePlus className="text-4xl"/>
        <CiMenuFries onClick={()=>setMode(!mode)} className='md:hidden block'/>
        {/* <Avatar className="z-10" alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
      </div>
    </div>
  )
}

export default Navbar
