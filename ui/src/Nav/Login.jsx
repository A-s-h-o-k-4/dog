import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login({setLog}) {
  const navigate = useNavigate();

  const Signup = ()=>{
    navigate('/signup');
  }
  
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [error,setError] = useState('')
  
 const check = async (e)=>{
    e.preventDefault() 
    setError('')
    
    if (email !== '' && pass !== '') {
      const res = await fetch('http://localhost:3000/login',{method:'post',body:JSON.stringify({email: email,pass:pass}),headers:{'content-type':'application/json'}})
      const data = await res.json()
      if (data.method == true) {
        setLog(true)
        navigate('/home')
      }
      if (data.method == false) {
        setError('Enter Correct Password!')
      }
    }else{
      setError('Enter Inputs')
    }
  }

  
  return (
    <div className='container-fluid mt-4'>
      <div className='p-4 d-flex justify-content-center'>
        <form onSubmit={(e)=>check(e)}>
          <h1 className='text-dark fw-bold'>Login Here</h1>
          <div className='mt-4'>
            <label className='form-lable' htmlFor='email'>Enter Id</label><br />
            <input type="text" className='mt-2 form-control'id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Id' />
          </div>
          <div className='mt-2'>
            <label className='form-lable' htmlFor='pass'>Enter Password</label><br />
            <input type='password' className='mt-2 form-control'id='pass' value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder='Enter Password'/>
          </div>
          <p className='text-danger fw-bold text-center mt-2'>{error}</p>
          <button className=' btn btn-success' style={{position:'relative',left:'25%',width:'100px'}}>Login</button>
          <p className='mt-3 text-center'>...or...</p>
          <button className='btn btn-primary'onClick={Signup} style={{position:'relative',left:'23%',width:'120px'}}>Sign-Up</button>
        </form>
      </div>
    </div>
  )
}

export default Login
