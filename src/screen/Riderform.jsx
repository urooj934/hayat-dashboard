import React from 'react';
import { useState,useNavigate,Alert } from 'react';
import {auth, firestore } from '../firebase/firebase';
import firebase from 'firebase';
import styled from 'styled-components';
import './Rider.css'

export default function Riderform() {

    const[name,setname]=useState('');
    const[phoneno,setPhoneno]=useState('');
    const[address,setaddress]=useState('');
    const[email,setemail]=useState('');

    const savedata=()=>{
        if (name==''||phoneno==''||address==''||email=='' ){
            alert('Fill all Fields');
        }
        else{
            createdonateObjectsDocument(name,phoneno,address,email);
        }
        }
        const createdonateObjectsDocument =async (name,phoneno,address,email)=>{
           const  riderdetails = await firestore.collection('riderdetails').doc();
            try{
              riderdetails.set({
                name,
                phoneno,
                address,
                email,
                location:'null',
                createdAt:new Date(),
              }).then(() => {
            //navigate('/feedback');
                Alert.alert('Added!');
               });
               setname(null);
               setPhoneno(null);
               setaddress(null);
               setemail(null);
            }
            catch(e){
                console.log(e).then(() => {
                    alert('Oops!','something went wrong');
                   });
            }}
  return (
    <>
    <Section>
    <div className='heading'>
    
    </div> 
    
    <div className='rider-box'>
    <img src={require('./logo3.png')}  width={100} height={100} />
     <h1>Rider Credentials</h1>
     <div className='form'>
     <label>Name</label><br></br>
     <input type='text' name='name' id='name' value={name} required onChange={(e)=>setname(e.target.value)}>
     </input>
     </div>
     <div className='form'>
     <label >Contact No</label><br></br>
     <input type='number' name='phoneno' id='phoneno' value={phoneno} onChange={(e)=>setPhoneno(e.target.value)}
     required></input>
     </div>
     <div className='form'>
     <label >Email</label><br></br>
     <input type='email' name='phoneno' id='phoneno' value={email} onChange={(e)=>setemail(e.target.value)}
     required></input>
       </div>
       <div className='form'>
     <label >Address</label><br></br>
     <input type='text' name='address' id='address' value={address} onChange={(e)=>setaddress(e.target.value)}
     required></input>
       </div>
    <button onClick={savedata}>Save</button>
    </div>
    </Section>
    </>
  );
}
const Section = styled.section`
right:0;
background-color: blueviolet;
background-image: linear-gradient(-315deg, #21d190 0%, blueviolet 74%);
  color: green;
  height: 130vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;`;