import { useContext } from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
export default function ProtectedRoute() {
  const {user} =useContext(AuthContext)
  const auth={
    loggedIn: user?true:false,
  }
  return auth.loggedIn ? <Outlet/> :<Navigate to='/login' />
  
}

