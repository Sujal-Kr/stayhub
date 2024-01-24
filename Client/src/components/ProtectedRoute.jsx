
import { Outlet,Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
  const auth={
    loggedIn: JSON.parse(localStorage.getItem('loggedIn'))||true,
  }
  return auth.loggedIn ? <Outlet/> :<Navigate to='/login' />
  
}

