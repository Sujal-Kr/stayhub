import React,{useState} from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import axios from 'axios'
import { database } from '../../firebase';


function FilterCard({setProperty}) {
    const [range,setRange]=useState(4000)
    const [val,setVal]=useState([])
    const [bhk,setBhk]=useState(1)
    
    const getData=async()=>{
      let temp = [];
			const snapshot = await database.property.get();
			snapshot.forEach((doc) => {
			temp.push({ ...doc.data() });
			});
      return temp
      
    }
    
    const handleFilter = async () => {
      const data = await getData();
    
      console.log("Filters applied: " + bhk + "  " + range);
      
      const temp = data.filter(item => {
        return item.price <= range && bhk == item.numberOfBhk;
      });

      setProperty(temp);
    }
    

    const handleReset=async()=>{
      const data=await getData()
      setProperty(data)
      setBhk(1)
      setRange(4000) 
    }

    
    
  return (
    <div className=' md:sticky top-40 shadow-xl p-3'>
      <div className="content-head flex text-sm font-bold justify-between">
        <h5 className=''>Filter</h5>
        <button className='text-[#3f37c9]'onClick={handleReset}>Reset</button>
      </div>
      <div className="flat-type">
        <div className="content-head font-bold">Appartment Type</div>
        <div className='flex gap-2 text-[0.8rem] my-2'>
            <div className={bhk === 1 ? "me bg-slate-300 px-1 cursor-pointer" : "bg-slate-300 px-1 cursor-pointer"} onClick={() => setBhk(1)}>1 BHK</div>
            <div className={bhk === 2 ? "me bg-slate-300 px-1 cursor-pointer" : "bg-slate-300 px-1 cursor-pointer"} onClick={() => setBhk(2)}>2 BHK</div>
            <div className={bhk === 3 ? "me bg-slate-300 px-1 cursor-pointer" : "bg-slate-300 px-1 cursor-pointer"} onClick={() => setBhk(3)}>3 BHK</div>
            <div className={bhk === 4 ? "me bg-slate-300 px-1 cursor-pointer" : "bg-slate-300 px-1 cursor-pointer"} onClick={() => setBhk(4)}>4 BHK</div>
        </div>

        <div className="avail-cont ">
            {/* <div className="content-head font-bold  ">Availablity</div>
            <div className='grid grid-cols-2 text-[0.8rem]'>
                <div className='flex gap-2 items-center'>
                    <input type="radio" name="avail" id="" value="immediately"/>
                    Immediately
                </div>
                <div className='flex gap-2 items-center'>
                  <input type="radio" name="avail" id="" value="later"/>
                  Later
                </div>
            </div> */}
        </div>
      </div>
      <div className="price-cont">
        <input  type="range" className=' slider w-full' step={500} min={2000} max={10000} value={range} onChange={(e)=>setRange(e.target.value)}/>
        <h5 className='flex  items-center'>Price Range:<MdCurrencyRupee/>  {range}</h5>
      </div>
      <div className="btn-cont">
        <button className='text-white px-10 w-full py-2 shadow-2xl my-6 bg-[#3f37c9]' onClick={handleFilter}>Apply Filters</button>
      </div>
    </div>
  )
}

export default FilterCard
