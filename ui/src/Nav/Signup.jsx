import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup({setLog}) {

  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repass,setRepass] = useState('')
  const [error,setError] = useState('')

  const store = async (e)=>{
    e.preventDefault()
    setError('')
    if (name !== '' && email !== '' && password !== '' && repass !== '') {
      if (password === repass) {
        const res = await fetch('http://localhost:3000/signup',{method:'post',headers:{'content-type':'application/json'},body:JSON.stringify({'name':name,'email':email,'password':password})}) 
        const data = await res.json()
        if (data.method == false) {
          setError('You Already Servey')
        }
        if(data.method == true){
          setLog(true)
          navigate('/home')
        }
      }else{
        setError('Check Password!')
      }
    }else{
      setError('Fill The Form!')
    }
  }

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-4'>
        <form onSubmit={(e)=>{store(e)}}>
          <h1 className='fw-bold mb-4'>Sign-In Here</h1>
          <div className='mb-3'>
            <label className='form-lable' htmlFor="name">Enter Name</label>
            <input className='form-control'value={name} type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name'id='name' />
          </div>
          <div className='mb-3'>
            <label className='form-lable' htmlFor="email">Enter Email</label>
            <input className='form-control'value={email} type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Id' id='email'/>
          </div>
          <div className='mb-3'>
            <label className='form-lable' htmlFor="pass1">Enter Password</label>
            <input className='form-control'value={password} type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' id='pass1'/>
          </div>
          <div className='mb-3'>
            <label className='form-lable' htmlFor="pass2">Re-Enter Password</label>
            <input className='form-control' type="text" value={repass} onChange={(e)=>{setRepass(e.target.value)}} placeholder='Re-Enter Password' id='pass2'/>
          </div>
          <p className='text-danger fw-bold text-center'>{error}</p>
          <button className='btn btn-success mt-2' style={{position:'relative',left:'35%'}}>SignUp</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
