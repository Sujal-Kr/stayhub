import React,{useState} from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import propertySlice, { applyFilters } from '../../redux/slice/propertySlice';
import { useDispatch } from 'react-redux';


function FilterCard({setProperty,property}) {
    const [range,setRange]=useState(4000)
    const [val,setVal]=useState([])
    const dispatch = useDispatch()
    const handleAppartmentType=(index)=>{
        setVal(val[index]=true)
    }
    const handleFilter=()=>{
      console.log(range);
      console.log(property);
      const data=property.filter(item=>item.price<=range)
      setProperty(data)
    }
  return (
    <div className=' md:sticky top-40 shadow-xl p-3'>
      <div className="content-head flex text-sm font-bold justify-between">
        <h5 className=''>Filter</h5>
        <button className='text-[#3f37c9]'>Reset</button>
      </div>
      <div className="flat-type">
        <div className="content-head font-bold">Appartment Type</div>
        <div className='flex gap-2 text-[0.8rem] my-2'>
            <div className="bg-slate-300 px-1">1 BHK</div>
            <div className="bg-slate-300 px-1">2 BHK</div>
            <div className="bg-slate-300 px-1">3 BHK</div>
            <div className="bg-slate-300 px-1">4 BHK</div>
        </div>
        <div className="avail-cont ">
            <div className="content-head font-bold  ">Availablity</div>
            <div className='grid grid-cols-2 text-[0.8rem]'>
                <div className='flex gap-2 items-center'>
                    <input type="radio" name="avail" id="" value="immediately"/>
                    Immediately
                </div>
                <div className='flex gap-2 items-center'>
                <input type="radio" name="avail" id="" value="within 30 days"/>
                Within 30 days
                </div>
                <div className='flex gap-2 items-center'>
                <input type="radio" name="avail" id="" value="after 30 days"/>
                After 30 days
                </div>
                <div className='flex gap-2 items-center'>
                <input type="radio" name="avail" id="" value="within 15 days"/>
                Within 15 days
                </div>
            </div>
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
