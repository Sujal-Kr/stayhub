
import { Outlet,Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
  const auth={
    loggedIn: localStorage.getItem('loggedIn')||false,
  }
  return auth.loggedIn ? <Outlet/> :<Navigate to='/login' />
  
}


