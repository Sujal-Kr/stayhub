import React,{useState,useEffect} from 'react'
import { TiArrowSortedUp,TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux'
import demo from '../../assets/prop-bg.jpg'
import Banner from '../banner/Banner';
import bg from '../../assets/bg.jpg'
import { sortByPriceAsc,sortByPriceDsc } from '../../redux/slice/propertySlice';
import './Property.css'
import axios from 'axios'


import Card from '../propCard/Card';
import FilterCard from '../filterCard/FilterCard';
function Property() {
  const data=useSelector((state)=>state.property)
  // useEffect(async()=>{
  //   const res=await axios.get("http://localhost:5174/property")
  //   console.log(res);
  // })
  const dispatch=useDispatch()
  const sortByPrice=()=>{
    dispatch(sortByPriceAsc())
  }
  const sortByPriceDesc = ()=>{
    dispatch(sortByPriceDsc())
  }
  
  

  return (
    <div>
      <Banner text={"Reimagine your Home"} imageUrl={bg}/>
      <div className='prop-cont my-20 px-2 md:px-24'>
        <div className='left-cont   top-0'>
          <FilterCard/>
        </div>
        <div className=''>
          <div className="content-head flex justify-between">
            <div>All results {data.products.length}</div>
            <div className="sort-cont flex items-center">
              <h5>Price</h5>
              <div className="sort-action-btn flex  flex-col text-xl">
                <TiArrowSortedUp onClick={sortByPrice}/>
                <TiArrowSortedDown onClick={sortByPriceDesc}/>
              </div>
            </div>
          </div>
          <div className=''>
            {
              data.products.map(item=>(
                <div key ={item.propertyId}>
                  <Card item={item}  imageUrl={demo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Property
