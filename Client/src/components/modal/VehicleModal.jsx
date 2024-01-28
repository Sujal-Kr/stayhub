import React from 'react'

function VehicleModal() {
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
                            <input type="text" name='b-name' className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md' />
                       </div>
                       <div className="name-cont">
                            <label htmlFor="name" className='text-[#3f37c9]'>Owner Name</label>
                            <input type="text"  className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md'/>
                       </div>
                    </div>
                    <div className="second grid md:grid-cols-2 gap-2 my-3">
                        <div className="price-cont flex flex-col">
                            <label className="text-[#3f37c9]" htmlFor='Price'>Price</label>
                            <input type="text" className='md:w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md'/>
                        </div>
                        <div className="phone-cont">
                            <label htmlFor="phone" className='text-[#3f37c9]'>Contact No</label>
                            <input type="text" inputMode='numeric' className='w-full outline-[#3f37c9] border-2 border-slate-300 px-4 py-2 rounded-md'/>
                        </div>
                    </div>
                    <div className='my-6'>
                        <button className='w-full bg-[#3f37c9] text-white px-4 py-3 rounded-md'>Upload</button>
                    </div>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
            </div>
        </dialog>
    </div>
  )
}

export default VehicleModal
