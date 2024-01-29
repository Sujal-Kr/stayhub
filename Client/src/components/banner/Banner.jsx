import React from 'react'
import buildings from '../../assets/build.jpg'
import dots from '../../assets/dots.svg'
function Banner({text,imageUrl}) {
    const bgStyle={
        backgroundImage:`url(${imageUrl})`,
        backgroundSize:'100%',
        backgroundPosition:"center",
        backgroundRepeat:'no-repeat',
        
    }
  return (
    <div className='h-[24rem] mt-20 flex justify-center items-center ' style={bgStyle}>
        <h4 className=' special text-slate-800 drop-shadow-2xl text-center text-3xl md:text-8xl'>{text}</h4>
    </div>
  )
}

Banner.defaultProps = {
  imageUrl: dots
}
export default Banner
