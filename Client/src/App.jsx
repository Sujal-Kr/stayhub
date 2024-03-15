
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Property from './components/property/Property'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import SingleProperty from './components/singleProperty/SingleProperty'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import {Feature}  from './components/feature/Feature'
import Sellproperty from './components/listing/Sellproperty'
import ProtectedRoute from './components/ProtectedRoute'
import Mess from './components/mess/Mess'
import Vehicle from './components/transport/Vehicle'
import { AuthProvider } from './context/authContext'
import { UserProvider } from './context/userContext'
import UpdateProperty from './components/MyListing/UpdateProperty'
import Profile from './components/profile/Profile'
function App() {
  

  return (
    <>
      <Router>
        <AuthProvider>
          <UserProvider>
          <Navbar/>
          <Routes>
            <Route path='/'element={<>
              <Hero/>
              <Feature/>
              <Footer/>
              </>}>
            </Route>
            
            <Route path='/login'element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/property/:id'element={<>
              <SingleProperty/>
              <Footer/>
              </>}>
            </Route>
            <Route element={<ProtectedRoute/>} >
              <Route path='/property' element={<>
                <Property/>
                <Footer/>
                </>}>
              </Route>
              <Route path='/proplisting' element={<Sellproperty/>}></Route>
              <Route path='/vehicle' element={<>
                  <Vehicle/>
                  <Footer/>
                </>
              }></Route>
              <Route path='/mess' element={
                <>
                <Mess/>
                <Footer/>
                </>
              }></Route>
              
              <Route path='/profile/:id' element={<Profile/>}></Route>
              <Route path='/update/:id' element={<UpdateProperty/>}></Route>
              </Route>

          </Routes>
          </UserProvider>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
