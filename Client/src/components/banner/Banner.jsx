import React from 'react'
import buildings from '../../assets/build.jpg'
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

// Banner.defaultProps = {
//   imageUrl: buildings
// }
export default Banner
