import React from 'react'
import { BiCommentDetail } from "react-icons/bi";
import { MdLocationPin,MdOutlineHomeWork, MdWhatsapp } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Card({item}) {
  
  
  return (
    <div key={item.Pid} className=' prop-card grid grid-cols-1 lg:grid-cols-2 my-8 '>
                  <div className="iamge-cont ">
                    <img src={item.ImageUrl} alt="demo-image" className=' max-h-80 object-cover w-full h-full'/>
                  </div>
                  <div className="content-cont  px-10">
                    <div className="top-cont flex justify-between border-b-2 border-slate-100  text-center  py-6">
                      
                      <div>
                        <h5>Rs {item.price}</h5>
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
                          <button className='bg-[#3f37c9] rounded px-12 py-2 text-white'><Link to={`/property/${item.Pid}` }>Get Details</Link></button>
                        </div>
                        <div className="btn-cont">
                          <Link to={`https://wa.me/${item.phone}`} target='_blank'><MdWhatsapp  className='text-3xl text-green-400'/></Link>
                        </div>
                      </div>
                      <div className="details-cont my-2 ">
                            <div className='font-bold'>{item.propertyName}</div>
                            <div className="rating-cont flex items-center gap-1">
                                <BiCommentDetail className='text-yellow-400 '/>
                                {item.reviews.length+" reviews"}
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
                                {item.numberOfBhk+" BHK"}
                            </div>
                        </div>
                        <div className="nearyby-cont flex flex-wrap gap-2 text-[0.7rem] ">
                        <div>Nearby Place:</div>
                          {
                            item.placesNearby.map((place,index)=>(
                              <div key={index} className='  bg-slate-200 p-[0.2rem] rounded '>
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
