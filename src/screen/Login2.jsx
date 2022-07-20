import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';

const Login =()=> {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
  
  const navigate= useNavigate();

  const handlelogin =()=>{
    if(email==='admin@gmail.com' && password==='admin123'){
      navigate('/dashboard')
    } else{
      alert('Username or Password is incorrect! Try Again');
    }
  }

  return (
    <>
    <div className='heading'>
    <img src={require('./logo.png')}  width={100} height={100} />
      <h1>Hayat Dashboard</h1>
    </div> 
    <div className='login-box'>
     <h1>Admin Login</h1>
     <label>Email</label><br></br>
     <input type='email' name='email' id='email' value={email} required onChange={(e)=>setEmail(e.target.value)}></input><br></br>
     <label >Password</label><br></br>
     <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}
     required></input>
    <button onClick={handlelogin}>Sign In</button>
    </div>
    </>
  );
}
export default Login;