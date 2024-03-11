import React,{useContext} from 'react'
import { useState } from 'react'
import { BiJoystick } from "react-icons/bi";
import {MdOutlineRealEstateAgent} from 'react-icons/md'
import { Link , useNavigate } from 'react-router-dom';
import bgCover from '../../assets/students.svg'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/authContext';

function Login() {
    const {login} =useContext(AuthContext)
    const navigate = useNavigate();
    const [email,setEmail]=useState()
    const [pass,setPass]=useState()
    const [error,setError]=useState('')
    const notify=()=>toast.success("Logged In",{
        autoClose:500
    })
    const backgroundStyle={
        backgroundImage:`url(${bgCover})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'top',
        backgroundSize:'cover',

    }
    const morphism = {
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 24px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	}
    

    
    const handleLogin =async(e)=>{
        e.preventDefault();
        try{
            const data=await login(email,pass)
            console.log("i am logged ib");
            console.log(data);
            notify()
            navigate('/')
            
        }catch(err){
            setError(" Wrong Credentials!!");
            setTimeout(()=>{
                setError('')
            },3000)
        }
    }
   

  return (
    <div  className='h-screen flex justify-center items-center ' style={backgroundStyle}>
        <ToastContainer />
      <div className="login-cont w-[30rem] px-10 mx-2  bg-[#353535]   rounded" style={morphism}>
        <div className="form-icon-cont text-3xl flex items-center gap-2 justify-center my-12">
            <MdOutlineRealEstateAgent/>
            <h2 className='main-head'>StayHub</h2>
        </div>
        <div className="mode-cont flex gap-4 uppercase justify-center my-5">
            <div className="login  border-b-2 border-[#3f37c9]" >Log In</div>
            <div className="signup  " ><Link to='/signup'>Sign Up</Link></div>
        </div>
        {error&&<div role="alert" className="alert alert-error py-2 bg-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Opps!{error}</span>
		</div>}
        <form action="">

            <div>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full text-slate-900 outline-none rounded-full py-3 px-3 my-3'placeholder='Email' type="email" name="" id="" />
            </div>
            
            <div>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} className='w-full text-slate-900 outline-none rounded-full py-3 px-3 my-3'placeholder='Password' type="password" name="" id="" />
            </div>
            <div className="check-cont flex gap-2">
                <input type="checkbox" name="stay" id="" />
                <label htmlFor="stay">Stay Singed In</label>
            </div>
            <div className="btn-cont my-6">
                <button className='uppercase bg-[#3f37c9] text-white w-full py-3 rounded-full' onClick={handleLogin}>Log In</button>
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
