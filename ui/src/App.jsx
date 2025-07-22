import React, { useState } from 'react'
import {Route,Routes,Link,useNavigate} from 'react-router-dom'
import Home from './Nav/Home'
import Login from './Nav/Login'
import About from './Nav/About'
import Signup from './Nav/Signup'
import Services from './Nav/Services'

function App() {

  const [log,setLog] = useState(false)
const navigate=useNavigate();

  function out(){
    const ok = confirm('Confirm Logout!')
    if(ok){
      setLog(false);
      navigate('/login');
    }
  }
  
  return (
    <div>
      <div className='container-fluid d-flex justify-content-evenly p-2 fs-4 fw-bold bg-dark'>
        <Link className='nav-link text-white active' to='/home'>Oneday</Link>
        {log==false&&<Link className='nav-link text-white' to='/login'>Login</Link>}
        {log==true?<Link className='nav-link text-white' to='/services'>Services</Link>:''}
        <Link className='nav-link text-white' to='/about'>About</Link>
        {log==true?<Link className='nav-link text-white' onClick={out}>Logout</Link>:''}
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home'element={<Home/>} />
        <Route path='/login' element={<Login setLog={setLog}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<Signup setLog={setLog}/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App
