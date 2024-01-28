import React from 'react'
import { useState } from 'react'
import { BiJoystick } from "react-icons/bi";
import {MdOutlineRealEstateAgent} from 'react-icons/md'
import { Link , useNavigate } from 'react-router-dom';
import bgCover from '../../assets/bg.svg'
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [email,setEmail]=useState()
    const [pass,setPass]=useState()
    const [error,setError]=useState('')
    const backgroundStyle={
        backgroundImage:`url(${bgCover})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'65%',
    }
    const morphism = {
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 24px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	}
    

    const userData ={
        email,
        password:pass
    }

    const loginFunction = async(e) =>{
        e.preventDefault();
        // yaha p userId v milega tumko ab usko store kro kahe p aur usse property listing m link krnge
        // after loggin user info ko display kro dashboard ya "/"" m
        const res =  await axios.post('http://localhost:5000/auth',userData);
        if( res.status === 201)navigate("/");
    }

  return (
    <div  className='h-screen flex justify-center items-center ' style={backgroundStyle}>
      <div className="login-cont w-[30rem] px-10 mx-2  bg-[#353535]  text-white rounded" style={morphism}>
        <div className="form-icon-cont text-3xl flex items-center gap-2 justify-center my-12">
            <MdOutlineRealEstateAgent/>
            <h2>StayHub</h2>
        </div>
        <div className="mode-cont flex gap-4 uppercase justify-center my-5">
            <div className="login  border-b-2 border-green-300" >Log In</div>
            <div className="signup  " ><Link to='/signup'>Sign Up</Link></div>
        </div>
        <form action="">
            <div>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full text-slate-900 font-semibold outline-none rounded-full py-3 px-3 my-3'placeholder='email' type="email" name="" id="" />

            </div>
            
            
            <div>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} className='w-full text-slate-900 font-semibold outline-none rounded-full py-3 px-3 my-3'placeholder='Password' type="password" name="" id="" />

            </div>
            <div className="check-cont flex gap-2">
                <input type="checkbox" name="stay" id="" />
                <label htmlFor="stay">Stay Singed In</label>
            </div>
            <div className="btn-cont my-6">
                <button className='uppercase bg-[#2c6e49] text-white w-full py-3 rounded-full'>Log In</button>
            </div>
            <div className="action-btn my-6">
                <h5 className='text-center'>Forgot Password?</h5>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
