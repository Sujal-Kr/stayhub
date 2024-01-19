import React ,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
function Sellproperty() {
    const [services,setServices]=useState([])
    const [sev,setSevdata]=useState()
    const [rooms,setRooms]=useState()
    const [name,setName]=useState()
    const [type,setType]=useState()
    const [location,setLocation]=useState()
    const [price,setPrice]=useState()
    const [places,setPlaces]=useState([])
    const [pal,setPal]=useState()
    const [available,setAvailable]=useState(true)
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
  return (
    <div className='h-screen  flex my-20  justify-center items-center'>
      <div className='bg-white shadow-md rounded px-8 pt-6 pb-8'>
        <form action="">
            <div className='sm:w-[38rem] flex flex-col gap-4'>
                <div className="first grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="name-cont flex flex-col">
                        <label htmlFor="pname">Property Name</label>
                        <input type="text"  className='appearance-none w-full bg-slate-100 text-grey-darker  outline-blue-800 rounded py-2 px-4'/>
                    </div>
                    <div className='type-cont flex flex-col'>
                        <label htmlFor="">Property Type</label>
                        <select name="" id="" className='px-4 py-2 outline-blue-800 bg-slate-100 rounded'>
                            <option>Flat</option>
                            <option value="">Apartment</option>
                            <option value="">House</option>
                        </select>
                    </div>
                </div>
                <div className="second grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col room-cont">
                        <label htmlFor="proom">Rooms</label>
                        <input type="text" name="" id="" inputMode='numberic' className=' rounded px-4 py-2 bg-slate-100 outline-blue-800' />
                    </div>
                    <div className='furn-cont flex flex-col '>
                        <label htmlFor="furn">Furnished</label>
                        <select name="" id="" className=' px-4 py-2 outline-blue-800 bg-slate-100 rounded uppercase'>
                            <option>Fully</option>
                            <option value="">Semi</option>
                            <option value="">None</option>
                        </select>
                    </div>
                </div>
                <dv className="third flex flex-col">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='eg: Ashta' className='px-4 py-2  outline-blue-800 bg-slate-100 rounded'/>
                </dv>
                <div className="fourth ">
                    <div className="amenty-cont flex flex-col">
                        <label htmlFor="">Amenties</label>
                        <input type="text" value={sev} onChange={(e)=>setSevdata(e.target.value)} onKeyUp={(e)=>handleService(e)} placeholder='eg: Wifi' className=' rounded px-4 py-2  bg-slate-100 outline-blue-800' />
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
                        <input type="text" name="name" inputMode='numeric' className='px-4 py-2  outline-blue-800 bg-slate-100 rounded'/>
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
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="eight ">
                    <label htmlFor="fileinput">Property Images</label>
                    <label htmlFor='fileinput' className='border-2 border-dashed h-40 flex flex-col items-center justify-center'>
                        <input
                        accept='image/*'
                        type='file'
                        id="fileinput"
                        style={{ visibility: 'hidden', width: '0', height: '0' }}
                        />
                        <FiUpload className='text-5xl'/>
                        <div>Drag files here or click to Upload the iamge</div>
                    </label>
                </div>
                
            </div>
        </form>
      </div>
    </div>
  )
}

export default Sellproperty
