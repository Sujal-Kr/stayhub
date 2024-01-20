import React ,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import {CiUser} from "react-icons/ci";
import axios from 'axios'

function Sellproperty() {
    
    const [services,setServices]=useState([])
    const [sev,setSevdata]=useState()
    const [rooms,setRooms]=useState()
    const [name,setName]=useState()
    const [type,setType]=useState('Apartment')
    const [location,setLocation]=useState()
    const [price,setPrice]=useState()
    const [furnished,setFurnished]=useState('none')
    const [places,setPlaces]=useState([])
    const [pal,setPal]=useState()
    const [image,setImage]=useState()
    const [available,setAvailable]=useState(false)
    const sendData=async()=>{
        const obj={
            propertyName: name,
            numberOfRooms: rooms,
            price: price,
            location: location,
            propertyType: type,
            isFurnished: furnished,
            amenities: services,
            available: available,
            placesNearby: places
        }

        const res=await axios.post('http://localhost:5000/property',obj)
        console.log(res);
    }
    const handleFormButton=(e)=>{
        e.preventDefault()
        sendData()

    }
    const handleService=(e)=>{
        if(e.key==='Enter'&&services.length<=3&&sev!=='') {
            e.preventDefault(); 
            setServices([...services, { id: services.length + 1, data: sev }]);
            setSevdata('');
        }
    }
    const deleteService=(id)=>{
        const temp=services.filter(item=>item.id!=id)
        setServices(temp)
    }
    const handlePlaces=(e)=>{
        if(e.key==='Enter'&&places.length<=3&&pal!=='') {
            e.preventDefault(); 
            setPlaces([...places, { id: places.length + 1, data: pal }]);
            setPal('');
        }
    }
    const deletePlaces=(id)=>{
        const temp=places.filter(item=>item.id!=id)
        setPlaces(temp)
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault(); 
    }
    
  return (
    <div className='min-h-screen my-40 flex   justify-center items-center'>

      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
        <div className="content-head my-4">

            <div className="text-3xl ">StayHub</div>
            <div className='flex items-center'>
                <div className="text-blue-400">Welcome Seller</div>
            </div>
            <div>Provide your details list your property</div>
        </div>
        <div >
            <div className='sm:w-[38rem] flex flex-col gap-4'>
                <div className="first grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="name-cont flex flex-col">
                        <label htmlFor="pname">Property Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='appearance-none w-full bg-slate-100 text-grey-darker  outline-blue-800 rounded py-2 px-4'/>
                    </div>
                    <div className='type-cont flex flex-col'>
                        <label htmlFor="">Property Type</label>
                        <select name="" id="" className='px-4 py-2 outline-blue-800 bg-slate-100 rounded' value={type} onChange={(e)=>setType(e.target.value)}>
                            <option value="flat">Flat</option>
                            <option value="apartement">Apartment</option>
                            <option value="house">House</option>
                        </select>
                    </div>
                </div>
                <div className="second grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col room-cont">
                        <label htmlFor="proom">Rooms</label>
                        <input type="text" value={rooms} onChange={(e)=>setRooms(e.target.value)} name="" id="" inputMode='numberic' className=' rounded px-4 py-2 bg-slate-100 outline-blue-800' />
                    </div>
                    <div className='furn-cont flex flex-col '>
                        <label htmlFor="furn">Furnished</label>
                        <select name="" id=""  value={furnished} onChange={(e)=>setFurnished(e.target.value)} className=' px-4 py-2 outline-blue-800 bg-slate-100 rounded uppercase'>
                            <option value="fully">Fully</option>
                            <option value="semi">Semi</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <dv className="third flex flex-col">
                    <label htmlFor="">Location</label>
                    <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='eg: Ashta' className='px-4 py-2  outline-blue-800 bg-slate-100 rounded'/>
                </dv>
                <div className="fourth ">
                    <div className="amenty-cont flex flex-col">
                        <label htmlFor="">Amenties</label>
                        <input type="text"  value={sev} onChange={(e)=>setSevdata(e.target.value)} onKeyUp={(e)=>handleService(e)} placeholder='eg: Wifi' className=' rounded px-4 py-2  bg-slate-100 outline-blue-800' />
                        <div className="flex gap-2 my-3">
                            {
                                services.map(item=>(
                                    <div className='bg-slate-100 p-1 text-[0.7rem] flex items-center gap-2'>
                                        <span>{item.data}</span>
                                        <IoMdClose onClick={()=>deleteService(item.id)}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="fifth grid grid-cols-1 sm:grid-cols-2">
                    <div className='price-cont flex flex-col'>
                        <label htmlFor="price-cont">Price</label>
                        <input type="text"value={price} onChange={(e)=>setPrice(e.target.value)} name="name" inputMode='numeric' className='px-4 py-2  outline-blue-800 bg-slate-100 rounded'/>
                    </div>
                    
                </div>
                <div className="sixth">
                    <label htmlFor="">Nearby Places</label>
                    <input type="text" value={pal} onChange={(e)=>setPal(e.target.value)} onKeyUp={(e)=>handlePlaces(e)} placeholder='eg: Club' className='w-full rounded px-4 py-2  bg-slate-100 outline-blue-800' />
                    <div className="flex gap-2 my-3">
                        {
                            places.map(item=>(
                                <div className='bg-blue7-100 p-1 text-[0.7rem] flex items-center gap-2'>
                                    <span>{item.data}</span>
                                    <IoMdClose onClick={()=>deletePlaces(item.id)}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="seventh">
                    <div className="avail-cont flex gap-2">
                        <label htmlFor="avail">Available</label>
                        <input type="checkbox" checked={available} onChange={(e)=>setAvailable(e.target.checked)}/>
                    </div>
                </div>
                <div className="eight ">
                    <label htmlFor="fileinput">Property Images</label>
                    <input type="file" accept='image/*' value={image} onChange={(e)=>setImage[e.target.files[0]]} />
                </div>
                <div className="post-btn">
                    <button  onClick={(e)=>handleFormButton(e)}className='px-4 py-3 bg-blue-800 text-white uppercase w-full'>List Yout Property</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sellproperty
