/* eslint-disable no-unused-vars */
import React ,{useContext, useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import {CiUser} from "react-icons/ci";
import axios from 'axios'
import bgcover from '../../assets/stud.svg'
import { IoMdSend } from "react-icons/io"
import { AuthContext } from '../../context/authContext';
import {UserContext} from '../../context/userContext'
import { database,storage } from '../../firebase';
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import {Toaster,toast} from 'sonner'
function UpdateProperty() {
  const {id} = useParams()
    console.log(id)
    const [Pname,setPname] =useState()
    const [type,setType] = useState()
    const [phone,setPhone] = useState()
    const [loc,setLoc] = useState()
    const [bhk,setBhk] = useState("1")
    const [price,setPrice] = useState()
    const [file,setFile] = useState()
    const [amn,setAmn]= useState([])
    const [near,setNear]=useState()
    const [loading,setLoading]=useState(true)
    const {user} = useContext(AuthContext) 
    const {userData}=useContext(UserContext)
    const navigate=useNavigate()
    const background ={
        backgroundImage:`url(${bgcover})`,
        backgroundPosition:"center",
        backgroundSize:"center"
    }
    const morphism = {
        
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 48px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	};
    const notify=()=>{
        toast.success("Property Updated Successfully!!!")
    }
    const check = ()=>toast.error("You dont have permission to perform this action")
    const handleForm=(e)=>{
        e.preventDefault()
        
        
        // if(userData.bussinessAccount==false){
        //     check()
        //     return
        // }
        const uid=user.uid
        if(file==null){
            return
        }
        
        let uploadTask=storage.ref(`/users/${id}/property`).put(file)
            uploadTask.on('state_changed',fn1,fn2,fn3)
            //                       progress,error,success
        function fn1(snapshot){
            setLoading(true)
            let progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100
            console.log(`progress is ${progress}`)
        } 
        function fn2(error){
            console.error(error.message)
            return
        }
        function fn3(){
            const temp=[]
            const service=amn.split(" ")
            const place=near.split(" ")
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
                
                database.property.doc(id).update({
                    Pid:id,
                    propertyName: Pname,
                    OwnerId:uid,
                    numberOfBhk: bhk||"1",
                    price: price,
                    location: loc,
                    propertyType: type,
                    phone:phone,
                    amenities: service,
                    placesNearby: place,
                    ImageUrl:url,
                    reviews:temp,
                })
            }).then(()=>{
                setLoading(false)
                notify()
                navigate('/profile/listing')
            })
            
        }
    }
  return (
    <div className=''style={background}>
        <Toaster/>
        <div className='shadow-xl  p-10 md:px-20 my-20 md:mx-40 rounded  ' style={morphism}>
            <div className="head text-xl">Basic Information</div>
            <form action="" onSubmit={handleForm}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Property Name</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={Pname} onChange={(e)=>setPname(e.target.value)}/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Property Type</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={type} onChange={(e)=>setType(e.target.value)} />
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Location </label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={loc} onChange={(e)=>setLoc(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Phone Name</label>
                        <input type="number" inputMode='numeric' className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col relative'>
                        <label className='text-[#3f37c9]' htmlFor="">Ammenties</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2 ' value={amn} onChange={(e)=>setAmn(e.target.value)} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Nearby Places</label>
                        <input type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={near} onChange={(e)=>setNear(e.target.value)}/>
                    </div>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="" >BHK Details</label>
                        <select type="text" className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={bhk} onChange={(e)=>setBhk(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+ </option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[#3f37c9]' htmlFor="">Price</label>
                        <input type="number" inputMode='numeric' className='border-b-2 bg-transparent border-slate-600 outline-none px-4 py-2' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className='text-[#3f37c9]' htmlFor="">Upload Image</label>
                    <input type="file" name="" id="" onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <div className='flex justify-end my-2'>
                    <button className='px-2 py-2 bg-[#3f37c9] text-white rounded shadow-xl' type='submit'>Save and Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateProperty
