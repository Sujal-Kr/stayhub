import React, { useState, useContext } from 'react';
import { CiMenuFries, CiSearch, CiLogout } from "react-icons/ci";
import { MdClose, MdOutlineRealEstateAgent } from "react-icons/md";
import { IoIosBookmark } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { PiUserCirclePlus } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../context/authContext';
import { UserContext } from '../../context/userContext';

function Navbar() {
    const [mode, setMode] = useState(false);
    const { user, logout } = useContext(AuthContext);
    console.log(user);
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const {userData}=useContext(UserContext)
   
    const handleUser = async () => {
        if (user) await logout();
        else navigate('/login');
        setToggle(false)
    };

    return (
        <div className='nav-cont py-3 flex items-center justify-between px-6 shadow-md'>
            <div className="nav-icon flex items-center text-2xl">
                <MdOutlineRealEstateAgent className='text-5xl' />
                <Link to='/' className='text-[#3f37c9] normal-case main-head font-[1000]'>StayHub</Link>
            </div>
            <div className={mode ? "nav-list active text-md text-gray-400" : "nav-list text-md text-gray-400"}>
                <div className="icon-cont">
                    <MdClose className='block md:hidden' onClick={() => setMode(!mode)} />
                </div>
                <Link onClick={() => setMode(!mode)} className='active:text-red-300' to='/property'>Flats</Link>
                <Link onClick={() => setMode(!mode)} className='active:text-red-300' to='/mess'>Mess</Link>
                <Link onClick={() => setMode(!mode)} className='active:text-red-300' to='/vehicle'>Vehicles</Link>
                <Link onClick={() => setMode(!mode)} className='active:text-red-300' to='/proplisting'>Listing</Link>
            </div>
            <div className="search-cont relative hidden md:block">
                <button className='px-6 py-2 shadow-full rounded bg-[#3f37c9] text-white'><Link to='/login'onClick={handleUser}>{user?'Logout':'Login'}</Link></button>
            </div>
            <div className="action-btn flex items-center gap-4">
                <div className='relative'>
                    <div className='flex items-center gap-2 'onClick={() => setToggle(!toggle)}>
                        <div className='h-10 flex items-center justify-center w-10 rounded-full bg-slate-100'>{userData?userData.userName.substring(0,1):"S"}</div>
                        <p>{userData?userData.userName:""}</p>
                    </div>
                    {toggle &&
                        <div className='bg-white shadow-md flex flex-col absolute right-0 py-2 px-1 rounded'>
                            <div className='flex items-center gap-2 p-2 hover:bg-slate-100' onClick={() => setToggle(false)}>
                                <IoPersonOutline />
                                <Link to={`/profile/${userData.userId}`}>Profile</Link>
                            </div>
                            <div className='flex items-center gap-2 p-2 hover:bg-slate-100' onClick={handleUser}>
                                <CiLogout />
                                {user ? 'Logout' : 'Login'}
                            </div>
                        </div>
                    }
                </div>
                <CiMenuFries onClick={() => setMode(!mode)} className='md:hidden block' />
            </div>
        </div>
    );
}

export default Navbar;
