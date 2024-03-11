import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../../firebase'
import Loading from '../loading/Loading'
import {MdOutlineCurrencyRupee,MdLocationPin} from 'react-icons/md'
import PropComment from '../comment/PropComment'
import {BsBuildings} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function SingleProperty() {
  const {id} = useParams()
  const [data,setData]=useState()
  const [lodaing,setLoading]=useState(true)
  const navigate=useNavigate()
  const fetchData=async()=>{
    setLoading(true)
    try{
      let temp = {};
			const snapshot = await database.property.doc(id).get();
			temp=snapshot.data()
      setData({...temp})
      // console.log(temp);
      setLoading(false)
    }catch(err){
      console.error(err.message)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>{
      lodaing?<Loading/>:<div className='my-20'>
      <section className="text-gray-600 body-font mx-4 md:mx-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col ">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded max-h-80 h-full w-full" alt="hero" src={data.ImageUrl}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left  ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Your Next Chapter Starts Here
      </h1>
      <div>
        <p className=" leading-relaxed text-3xl">{data.propertyName}</p>
        <p className='flex items-center'><MdOutlineCurrencyRupee/>{data.price}</p>
        <p className='flex items-center'><MdLocationPin className='text-[#e71d36] text-xl'/>{data.location}</p>
        <p className='flex items-center'><BsBuildings/>{data.propertyType}</p>
        <p className='text-xl mt-6'>Highlights</p>
        <div className='flex gap-1'>
        {
          data.placesNearby.map((item)=>(
            <div className="badge badge-primary badge-outline my-2">{item}</div>
          ))
        }
        </div>
        <h4 className='text-xl'>Only for you</h4>
        <div className='flex gap-1'>
        {
          data.amenities.map((item)=>(
            <div className="badge badge-primary badge-outline my-2">{item}</div>
          ))
        }
        </div>
      </div>
      <div className="flex justify-center my-8">
        
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>navigate(`/profile/${data.OwnerId}`)}>Contact Owner</button>
        </div>
    </div>
  </div>
      <PropComment item={data} />
</section>
    </div>
    }
    </>
  )
}

export default SingleProperty
