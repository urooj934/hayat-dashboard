import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';

const Login =()=> {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
  
  const navigate= useNavigate();


  return (
    <div className='login-box'>
    <h1>Admin Login</h1>
    <label>Email</label><br></br>
    <input type='email' name='email' id='email' value={email} required onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <label >Password</label><br></br>
    <input type='password' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}
    required></input>
   <button >Sign In</button>
   </div>
  );
}
export default Login;