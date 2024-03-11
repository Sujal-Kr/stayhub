import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import {Toaster,toast} from 'sonner'
import { database } from '../../firebase'
import { AuthContext } from '../../context/authContext'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../../firebase';
import { UserContext } from '../../context/userContext'

export default function VehicleModal({setLoading}) {
    const [isOpen, setIsOpen] = useState(false)
    const [bname,setBname]=useState()
    const [owner,setOwner]=useState()
    const [price,setPrice]=useState()
    const [phone,setPhone]=useState()
    const [file,setFile]=useState(null)
    const {user}= useContext(AuthContext)
    const {userData}=useContext(UserContext)
    const notify=()=>toast.success("Uploaded Successfully")
    const accNotify=()=>toast.error("You dont have a bussiness account!!!")
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
                }).then(()=>{
                    notify()
                    closeModal()
                    setLoading(false)
                })
                

            }
    }
  function closeModal() {
    setIsOpen(false)
    
  }

  function openModal() {
    if(userData.bussinessAccount==false){
      accNotify()
      return
    }
    setIsOpen(true)
  }

  return (
    <>
        <Toaster richColors/>
      <div className="fixed bottom-10 right-10 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black px-4 py-4 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          List your business
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle  transition-all">
                    <Dialog.Title className='text-xl my-3'>
                        List your business with us
                    </Dialog.Title>
                    <form onSubmit={handleFormSubmit}>
                        <div className="first grid grid-cols-1 gap-2 md:grid-cols-2 my-3">
                            <div className='flex flex-col'>
                                <label htmlFor="">Bussiness Name</label>
                                <input className='outline-none border-2 border-slate-200 rounded px-2 py-1' required type="text" value={bname} onChange={(e)=>setBname(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">Owner Name</label>
                                <input className='outline-none border-2 border-slate-200 rounded px-2 py-1'  type="text" value={owner} onChange={(e)=>setOwner(e.target.value)} />
                            </div>
                        </div>
                        <div className="second grid grid-cols-1 gap-2 md:grid-cols-2 my-3">
                            <div className='flex flex-col'>
                                <label htmlFor="">Price</label>
                                <input className='outline-none border-2 border-slate-200 rounded px-2 py-1' required type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">Phone Number</label>
                                <input className='outline-none border-2 border-slate-200 rounded px-2 py-1'  type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Upload Image</label>
                            <input type="file" required   onChange={(e)=>setFile(e.target.files[0])}/>
                        </div>
                        <div className="mt-4">
                            <button
                            type="submit" 
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-8 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                            Upload
                            </button>
                        </div>
                    </form>

                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
