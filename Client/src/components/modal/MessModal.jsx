import React,{useState,useContext} from 'react'
import { AuthContext } from '../../context/authContext'
import { v4 as uuidv4 } from 'uuid'
import { storage ,database} from '../../firebase'


function MessModal() {
    const [bname,setBname]=useState()
    const [owner,setOwner]=useState()
    const [price,setPrice]=useState()
    const [phone,setPhone]=useState()
    const [file,setFile]=useState(null)
    const [error,setError]=useState('')
    
    const {user} =useContext(AuthContext)
    const handleFormSubmit=async(e)=>{
        e.preventDefault()
        const uid=user.uid
        const mid=uuidv4()
        let uploadTask=storage.ref(`/users/${mid}/Mess`).put(file)
        uploadTask.on('state_changed',fn1,fn2,fn3)
        function fn1(snapshot){
            let progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100
            console.log(`progress is ${progress}`)
        } 
        function fn2(error){
            setError(error.message)
            setTimeout(()=>{
                setError('')
            },2000)
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
                database.mess.doc(mid).set({
                    id: mid,
                    BusinessName: bname,
                    Owner: owner,
                    OnnerId:uid,
                    price: price,
                    phone: phone,
                    ImageUrl: url,
                    reviews:[],
                    
                })
            })
            
        }
    }
  return (
    <div>
      <div>
        <dialog id="my_modal_4" className="modal">
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
                    <div className='upload-cont flex flex-col my-3'>
                        <label htmlFor="">Upload Some Images</label>
                        <input type="file" name=""  onChange={(e)=>setFile(e.target.files[0])} />
                    </div>
                    <div className='my-6'>
                        <button className='w-full bg-[#3f37c9] text-white px-4 py-3 rounded-md' onClick={handleFormSubmit}>Upload</button>
                    </div>
                    
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
            </div>
        </dialog>
    </div>
    </div>
  )
}

export default MessModal
