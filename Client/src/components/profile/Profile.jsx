import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'
import { database } from '../../firebase'
import { UserContext } from '../../context/userContext'
import Listing from '../MyListing/Listing'
function Profile() {
  const {id} =useParams()
  const [user,setUser]=useState()
  // const [list,setList]=useState([])
  
  const fetchUser=async()=>{
    const res=await database.users.doc(id).get()
    const data=await res.data()
    setUser(data)
  }
  useEffect(()=>{
    fetchUser()
  },[id,user])
  
  return (
    <div className='px-2 md:px-20 lbg-slate-100'>

      <div className='min-h-screen flex justify-center items-center '>
        <div className="profile-card mx-4 sm:mx-10 md:mx-20 lg:mx-80 h-[30rem] rounded w-full bg-white ">
          <div className='flex flex-col items-center justify-center gap-2 h-full'>
            <div><img src={avatar} alt="" className='h-40 w-40' /></div>
            <div className='text-4xl'>Hello Everyone!</div>
            <div className='uppercase text-lg'>{user&&user.userName}</div>
            <div className='text-slate-400'>{user&&user.email}</div>
            <div className='flex gap-4'>
              
              <button className='px-6 hover:shadow-2xl py-2 bg-blue-700 rounded-sm text-white'><a href={`mailto:${user&&user.email}`}>Mail Us</a></button>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-3xl border-b-2 py-2 border-slate-200'>My Listing</h1>
      <Listing />
      
    </div>
  )
}

export default Profile
