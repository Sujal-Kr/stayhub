import React from 'react'

function Banner({text,imageUrl}) {
    const bgStyle={
        backgroundImage:`url(${imageUrl})`,
        backgroudSize:"cover"
        
    }
  return (
    <div className='h-80 flex justify-center items-center ' >
        <h4 className=' text-red-100 text-center text-5xl'>{text}</h4>
    </div>
  )
}

export default Banner
