import React from 'react'
import { GoHeart,GoHeartFill } from "react-icons/go";
import { MdLocationPin,MdOutlineHomeWork,MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { setCurrentItem } from '../../redux/slice/propertySlice';
import { useDispatch } from 'react-redux';
function Card({item,imageUrl}) {
  const dispatch = useDispatch()
  const handleSingleProperty=(index)=>{
    console.log("i was clicked", index);
    dispatch(setCurrentItem(index-1))
  }
  return (
    <div key={item.propertyId} className=' prop-card grid grid-cols-1 lg:grid-cols-2 my-8 '>
                  <div className="iamge-cont ">
                    <img src={imageUrl} alt="demo-image" className='h-full'/>
                  </div>
                  <div className="content-cont  px-10">
                    <div className="top-cont flex justify-between border-b-2 border-slate-100  text-center  py-6">
                      <div className=''>
                        <h5>450 sqt</h5>
                        <h5 className='font-bold'>Built Up</h5>
                      </div>
                      <div>
                        <h5>Rs 3000</h5>
                        <h5 className='font-bold'>Deposit</h5>
                      </div>
                      <div>
                        <h5>Rs {item.price}</h5>
                        <h5 className='font-bold'>Rent</h5>
                      </div>
                    </div>
                    <div className="bottom-cont py-3">
                      <div className="action-btn flex justify-between items-center">
                        <div className="btn-cont">
                          <button className='bg-[#3f37c9] rounded px-12 py-2 text-white'><Link to={`/property/${item.propertyId}` }onClick={()=>handleSingleProperty(item.propertyId)}>Get Details</Link></button>
                        </div>
                        <div className="btn-cont">
                          <GoHeartFill className='text-3xl text-[#d00000]'/>
                        </div>
                      </div>
                      <div className="details-cont my-2 ">
                            <div className='font-bold'>{item.propertyName}</div>
                            <div className="rating-cont flex items-center gap-1">
                                <MdOutlineStarPurple500 className='text-yellow-400 '/>
                                {Math.floor(Math.random() * 10)}
                            </div>
                        <div className="mid-cont my-2 grid grid-cols-2 text-[0.8rem]">
                            <div className='flex items-center  '>
                                <MdLocationPin className='text-[#e71d36] text-xl'/>
                                {item.location}
                            </div>
                            <div className='flex items-center gap-1 '>
                                <MdOutlineHomeWork className='text-slate-500 text-xl'/>
                                {item.propertyType}
                            </div>
                            <div className='flex items-center text-[]'>
                                <AiOutlineNumber className='text-xl' />
                                {item.numberOfRooms+" Rooms"}
                            </div>
                        </div>
                        <div className="nearyby-cont flex flex-wrap gap-2 text-[0.7rem] ">
                        <div>Nearby Place:</div>
                          {
                            item.placesNearby.map((place)=>(
                              <div className='  bg-slate-200 p-[0.2rem] rounded '>
                                {place}
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default Card
