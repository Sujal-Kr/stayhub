import React ,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import {CiUser} from "react-icons/ci";
import axios from 'axios'
import bgcover from '../../assets/sale.svg'

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
    const backgroundStyle={
        backgroundImage:`url(${bgcover})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:" center",
    }
    const morphismStyle={
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )"
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
    <div className=''>
        <div className='shadow-xl  p-10 md:px-20 my-20 md:mx-40 rounded '>
            <div className="head text-xl">Basic Information</div>
            <form action="">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Property Name</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Owner Name</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Location </label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Phone Name</label>
                        <input type="number" inputMode='numeric' className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Ammenties</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Nearby Places</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">BHK Details</label>
                        <select type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2'>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+ </option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Price</label>
                        <input type="number" inputMode='numeric' className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className='text-[#3f37c9]' htmlFor="">Upload Image</label>
                    <input type="file" name="" id="" />
                </div>
                <div className='flex justify-end my-2'>
                    <button className='px-2 py-2 bg-[#3f37c9] text-white rounded shadow-xl'>Save and Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Sellproperty
