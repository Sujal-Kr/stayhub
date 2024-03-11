import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState ,useContext,useEffect} from 'react'
import {Toaster,toast} from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import { database,storage } from '../../firebase'
import { AuthContext } from '../../context/authContext'
import { UserContext } from '../../context/userContext'


export default function MessModal({setLoading}) {
    const [isOpen, setIsOpen] = useState(false)
    const [bname,setBname]=useState()
    const [owner,setOwner]=useState()
    const [price,setPrice]=useState()
    const [phone,setPhone]=useState()
    const [file,setFile]=useState(null)
    const [error,setError]=useState('')
    const {user}=useContext(AuthContext)
    const {userData} =useContext(UserContext)
    const accNotify=()=>toast.error("You dont have a bussiness account!!")
    const [data,setData]=useState('')
    
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        
        console.log("I am from user Data",userData)
        if(userData.bussinessAccount==false){
          accNotify()
          return
        }
        setIsOpen(true)
    }
    const notify=()=>{
        toast.success("Uploaded successfully")
    }
  const handleFormSubmit=async(e)=>{
        e.preventDefault()
        const uid=user.uid
        const mid=uuidv4()
        let uploadTask=storage.ref(`/users/${mid}/Mess`).put(file)
        uploadTask.on('state_changed',fn1,fn2,fn3)
        setLoading(true)
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
                
            }).then(()=>{
                setLoading(false)
                closeModal()
                notify()
            })
        }
    }
  return (
    <>
        <Toaster/>
      <div className="fixed bottom-12 right-12 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black px-4 py-3 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    List your business with us
                  </Dialog.Title>
                  <form action="" onSubmit={handleFormSubmit}>
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
                            <input type="number" className='md:w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </div>
                        <div className="phone-cont">
                            <label htmlFor="phone" className='text-[#3f37c9]'>Contact No</label>
                            <input type="number" inputMode='numeric' className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className='upload-cont flex flex-col my-3'>
                        <label htmlFor="">Upload Image</label>
                        <input type="file" name=""  onChange={(e)=>setFile(e.target.files[0])} />
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
