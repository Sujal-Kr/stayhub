
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Property from './components/property/property'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import store from './redux/store'
import {Provider} from 'react-redux'
import SingleProperty from './components/singleProperty/SingleProperty'
import Hero from './components/hero/Hero'
function App() {
  

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<>
            <Hero/>
          </>}></Route>
          <Route path='/property' element={<Property/>}></Route>
          <Route path='/login'element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/property/:id'element={<SingleProperty/>}></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
