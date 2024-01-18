import React from 'react'
import { BiJoystick } from "react-icons/bi";
import { Link } from 'react-router-dom';
import bgcover from '../../assets/prop-bg.jpg'
function Signup() {
    const backgroundStyle = {
        backgroundImage: `url(${bgcover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backdropFilter: 'blur(4px)'
    };
    const morphism={
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )"
    }
    
  return (
    <div  className={`h-screen flex justify-center items-center `}style={backgroundStyle}>
      <div className="login-cont w-[30rem] px-10 mx-2     rounded" style={morphism}>
        <div className="form-icon-cont text-3xl flex items-center gap-2 justify-center my-12">
            <BiJoystick/>
            <h2>StayHub</h2>
        </div>
        <div className="mode-cont flex gap-4 uppercase justify-center my-5">
            <div className="login " ><Link to='/login'>Log In</Link></div>
            <div className="signup  border-b-2 border-green-300">Sign Up</div>
        </div>
        <form action="">
            <div>
                <input className='w-full text-slate-900 font-semibold outline-none rounded-full py-3 px-3 my-3'placeholder='Username' type="text" name="" id="" />
            </div>
            
            <div className="">
                <input className='w-full text-slate-900 font-semibold outline-none rounded-full py-3 px-3 my-3'placeholder='Email' type="password" name="" id="" />
            </div>
            <div>
                <input className='w-full text-slate-900 font-semibold outline-none rounded-full py-3 px-3 my-3'placeholder='Password' type="text" name="" id="" />
            </div>
            <div className="check-cont flex gap-2">
                <input type="checkbox" name="stay" id="" />
                <label htmlFor="stay">Stay Singed In</label>
            </div>
            <div className="btn-cont my-6">
                <button className='uppercase bg-[#2c6e49] text-white w-full py-3 rounded-full'>Sign Up</button>
            </div>
            <div className="action-btn my-6">
                <h5 className='text-center'>Allready a user ? <Link to='/login'>Log In</Link></h5>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
