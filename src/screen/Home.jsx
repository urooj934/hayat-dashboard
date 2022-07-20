import { firestore } from '../firebase/firebase';
import React,{useEffect,useState,} from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import './Home.css'
import Navbar from './Navbar';
const Home=()=>{
    const[size,setsize]=useState('');
    const TotalFoodDonations=()=>{
        firestore.collection('users').get().then(snap => {
           setsize(snap.size) ; // will return the collection size
          });
    }
    useEffect(()=>{
      
       TotalFoodDonations();
    },[]);
    return(
        <>
        <Section>
        <h1 style={{color:'white'}}>Welcome to HAYAT Dashboard</h1>
        <div className='totalusers'>
        <h1>Total Users</h1>
        <h3>{size}</h3>
        </div>
        <div className='totaldonations'>
        <h1>Total Donations</h1>
        <h3>{size}</h3>
        </div>
        </Section>
        </>
    );
}

const Section = styled.section`
right:0;
  background-color: blueviolet;
  background-image: linear-gradient(315deg, #21d190 0%, blueviolet 74%);
  height: 83vh;
  width: 78vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;`;
export default Home;