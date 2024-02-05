import React,{useState,useContext} from 'react'
import { database } from '../../firebase'
import { AuthContext } from '../../context/authContext'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../../firebase';

function VehicleModal() {
    const [bname,setBname]=useState()
    const [owner,setOwner]=useState()
    const [price,setPrice]=useState()
    const [phone,setPhone]=useState()
    const [loading,setLoading]=useState(true)
    const [file,setFile]=useState(null)
    
    const {user} =useContext(AuthContext)
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        const uid=user.uid
        const vid=uuidv4()
        let uploadTask=storage.ref(`/users/${vid}/Vehicle`).put(file)
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
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                    console.log(url)
                    database.transport.doc(vid).set({
                        id: vid,
                        BusinessName: bname,
                        Owner: owner,
                        OnnerId:uid,
                        price: price,
                        phone: phone,
                        ImageUrl:url,
                        reviews:[],
                    })
                })
                setLoading(false)

            }
    }
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="">List your Bussiness with us</p>
                <form className='my-8'>
                    <div className="first grid md:grid-cols-2  gap-2 my-3">
                       <div className="b-name-cont">
                            <label htmlFor="b-name" className='text-[#3f37c9]'>Business Name</label>
                            <input type="text" name='b-name' className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' value={bname} onChange={(e)=>setBname(e.target.value)} />
                       </div>
                       <div className="name-cont">
                            <label htmlFor="name" className='text-[#3f37c9]'>Owner Name</label>
                            <input type="text"  className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' value={owner} onChange={(e)=>setOwner(e.target.value)}/>
                       </div>
                    </div>
                    <div className="second grid md:grid-cols-2 gap-2 my-3">
                        <div className="price-cont flex flex-col">
                            <label className="text-[#3f37c9]" htmlFor='Price'>Price</label>
                            <input type="text" className='md:w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="phone-cont">
                            <label htmlFor="phone" className='text-[#3f37c9]'>Contact No</label>
                            <input type="text" inputMode='numeric' className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Upload Image</label>
                        <input type="file"  onChange={(e)=>setFile(e.target.files[0])} />
                    </div>
                    <div className='my-6'>
                        <button className='w-full bg-[#3f37c9] text-white px-4 py-3 rounded-md' onClick={handleFormSubmit}>Upload</button>
                    </div>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
            </div>
        </dialog>
    </div>
  )
}

export default VehicleModal
