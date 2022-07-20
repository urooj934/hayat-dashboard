import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import Navbar from './Navbar';
import {Table ,TableContainer,TableHead,TableBody,TableRow,TableCell,Paper, Button,IconButton} from '@mui/material';
import './Rider.css';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase/firebase';
import TablePagination from '@mui/material/TablePagination';
import swal from 'sweetalert';
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

export default function Riders() {
  const [del,setDel ]=useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [Post,setPost]=useState([]);
  const [loading,setLoading]=useState(true);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
const handledelete=(ID)=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        
      })
      .then((willDelete) => {
        if (willDelete) {
            firestore.collection('users').doc(ID).delete().then(()=>
            {console.log('deleted');
        setDel(true);});
          swal("Record has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Delete cancel");
        }
      });
};
useEffect(()=>{
    
getUsers();

},[]);
useEffect(()=>{

getUsers();
setDel(false);
},[del]);
  
      const getUsers =async()=>{
         const list =[];
            await  firestore.collection('riderdetails').get()
              .then((querySnapshot)=>{
                  querySnapshot.forEach(doc=> {
                const {name,phoneno,address,email,createdAt}=doc.data();
              list.push({
                name,
                phoneno,
                address,
                email,
                createdAt
            });
        })
                   })
                   setPost(list);
            if(loading){
                setLoading(false);
            }
  }

  return (
    <>
    <Section>

    <div className='table'>
        <TableContainer component={Paper}>
            <Table sx={{border:3}} >
                <TableHead >
                  <TableRow> <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}align="center" colSpan={7}>Riders</TableCell></TableRow>
                    <TableRow>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}> ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Name</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Email</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Contact</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Address</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Created At</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row=>(
                    <TableRow key={row.createdAt} sx={{ minWidth: 650 , '&:hover': {
                        backgroundColor: 'lightgray !important',fontSize:22
                      }}} aria-label="simple table" hover={true}>
                        <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.ID}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.name}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.email}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.phoneno}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.address}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.createdAt.toDate().toDateString()}</TableCell>  
                    <TableCell align="center">
                      <Button onClick={()=>{handledelete(row.ID)}} sx={{ color:'green',alignItems:'centre'}}><DeleteIcon/></Button>
                      <Button  sx={{ color:'green',alignItems:'centre'}}>
                        <Link to={`/Updateobjectsdonation/${Post.ID}`}></Link><EditIcon/></Button></TableCell> 
                        </TableRow>
                        
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
        sx={{backgroundColor:"white", borderColor:'black',border:3}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Post.length}
        rowsPerPage={rowsPerPage}

        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
            </div>
    </Section>
    </>
  );
}
const Section = styled.section`
float:right;
background-color: blueviolet;
background-image: linear-gradient(-315deg, #21d190 0%, blueviolet 74%);
  color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;`;