import React,{useEffect,useState} from 'react';
import {useNavigate,Alert } from 'react';
import {firestore } from '../firebase/firebase';

import styled from 'styled-components';
import './Rider.css'

const Updateobjectsdonation =({key})=> {

    const[title,settitle]=useState('');
    const[desc,setdesc]=useState('');
    const[phoneno,setPhoneno]=useState('');
    const[address,setaddress]=useState('');
    const[category,setcategory]=useState('');
    const [userData,setUserData]=useState('');
    const savedata=()=>{
        if (title==''||phoneno==''||address==''||desc==''||category=='' ){
            alert('Fill all Fields');
        }
        else{
            
        }
        }
        const getdata =async()=>{
            var id=key;
            const currentUser =   await  firestore.collection("donateobject").doc(id).get()
                 .then((documentSnapshot)=>{
                     if(documentSnapshot.exists){
                      //   console.log('UserData' , documentSnapshot.data());
                    setUserData(documentSnapshot.data());
                     } })}
                     useEffect(()=>{
                        getdata();
                        console.log(key);
                         },[]);
       
  return (
    <>
    <Section>
    <div className='heading'>
    <img src={require('./logo3.png')}  width={100} height={100} />
      <h1>Riders</h1>
    </div> 
    <div className='rider-box'>
     <h1>Update Form</h1>
     <div className='form'>
     <input type='text' name='name' id='name'  value={userData?userData.title:''} required onChange={(e)=>settitle(e.target.value)}>
     </input>
     </div>
     <div className='form'>
     <label >Contact No</label><br></br>
     <input type='number' name='phoneno' id='phoneno' value={phoneno} onChange={(e)=>setPhoneno(e.target.value)}
     required></input>
     </div>
     <div className='form'>
     <label >Details</label><br></br>
     <input type='email' name='phoneno' id='phoneno' value={desc} onChange={(e)=>setdesc(e.target.value)}
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
export default Updateobjectsdonation;
const Section = styled.section`
right:0;
  background-color: blueviolet;
  color: green;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;`;