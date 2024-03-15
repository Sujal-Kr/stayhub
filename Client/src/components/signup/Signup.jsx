import React, {useState,useContext} from "react";
import {BiJoystick} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import {CiUser, CiMail} from "react-icons/ci";
import {MdOutlinePassword, MdOutlineRealEstateAgent} from "react-icons/md";
import bgcover from "../../assets/bg_cover.jpg";
import axios from "axios";
import { database } from "../../firebase";
// import Cookies from "universal-cookie";
import { AuthContext } from "../../context/authContext";

function Signup() {
	const [user, setUser] = useState();
	const [pass, setPass] = useState();
	const [email, setEmail] = useState();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState()
	const [phone,setPhone] = useState()
	const [acc,setAcc] = useState(false)
	const [gender,setGender] = useState()
	const {signup} =useContext(AuthContext) 
	
	

	const backgroundStyle = {
		backgroundImage: `url(${bgcover})`,
		backgroundSize: "cover",
		backgroundPosition: "top",
		backgroundRepeat: "no-repeat",
		// backdropFilter: 'blur(4px)'
	};
	const morphism = {
		background: "rgba( 255, 255, 255, 0.25 )",
		boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
		backdropFilter: "blur( 24px )",
		borderRadius: "10px",
		border: "1px solid rgba( 255, 255, 255, 0.18 )",
	};
	
	const navigate = useNavigate();
	const handleSignUp=async(e)=>{
		e.preventDefault()
		try{
			const data=await signup(email,pass)
			const uid=data.user.uid
			await database.users.doc(uid).set({
				userId:uid,
				userName:user,
				email:email,
				phone:phone,
				gender:gender,
				bussinessAccount:acc,
				listing:[]
			})
			navigate('/')
			
		}catch(err){
			setError(err.message)
			setTimeout(()=>{
				setError('')
			},3000)
		}
	}

	return (
		<div className="bg-slate-100 h-screen py-20 flex items-center justify-center" style={backgroundStyle}>
			<div className="shadow-xl bg-white  p-8 rounded-xl" style={morphism}>
				<h3 className="text-2xl">Register</h3>
				<form action="" onSubmit={handleSignUp}>
					<div className="first grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
						<div className=" flex flex-col">
							<label className="font-bold"htmlFor="user">User Name</label>
							<input className="border-2 p-1 outline-none border-slate-200 rounded-md" type="text"name="user"  placeholder="John Doe" value={user} onChange={(e)=>setUser(e.target.value)}/>
						</div>
						<div className="flex flex-col">
							<label className="font-bold"htmlFor="mail">Email ID</label>
							<input className="border-2 p-1 outline-none border-slate-200 rounded-md" type="email" placeholder="user@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
						</div>
					</div>
					<div className="second  gap-3 my-4">
						<div className=" flex flex-col">
							<label className="font-bold" htmlFor="pass">Password</label>
							<input className="border-2 p-1 outline-none border-slate-200 rounded-md" type="password"name="pass" value={pass} onChange={(e)=>setPass(e.target.value)}/>
						</div>
						
					</div>
					<h3 className="text-center text-xl uppercase">Personal Information</h3>
					<div className="third grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
						<div className=" flex flex-col">
							<label className="font-bold" htmlFor="contact">Phone No.</label>
							<input className="border-2 p-1 outline-none border-slate-200 rounded-md" type="number" inputMode="numeric"name="contact" placeholder="984893****" value={phone} onChange={(e)=>setPhone(e.target.value)} />
						</div>
						<div className="flex flex-col">
							<label className="font-bold" htmlFor="gen">Gender</label>
							<input className="border-2 p-1 outline-none border-slate-200 rounded-md" type="text"name="gen" placeholder="Male" value={gender} onChange={(e)=>setGender(e.target.value)}/>
						</div>
					</div>
					<div className="flex items-center gap-1">
						<input type="checkbox" value={acc} onChange={() => setAcc(!acc)}/>
						<label htmlFor="acc"  Chrom>Businness Account</label>
					</div>
					<h6>Already having an account? <Link to='/login' className="text-blue-600">Login</Link></h6>
					<div className="my-4">
						<button type="submit" className="bg-black text-white rounded px-4 py-3 w-full">Register</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
