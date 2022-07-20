
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { firestore } from '../firebase/firebase';
import React,{useEffect,useState,} from 'react';
import '../App.css';
import {Table ,TableContainer,TableHead,TableBody,TableRow,TableCell,Paper, Button,IconButton} from '@mui/material';
import Navbar from './Navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from '@mui/material/TablePagination';
import swal from 'sweetalert';
import { width } from '@mui/system';
export default function Profile() {
  const [del,setDel ]=useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [Post,setPost]=useState([]);
  const [id,setId]=useState([]);
  const [loading,setLoading]=useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  await  firestore.collection('users').orderBy('createdAt','desc').get()
            .then((querySnapshot)=>{
                querySnapshot.forEach(doc=> {
              const {uid,UserName,city,country,email,phoneno,createdAt,userImg}=doc.data();
          list.push({
              ID:doc.id,
              uid,
              UserName,
              city,
              country,
              email,
              phoneno,
              userImg,
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
                  <TableRow> <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}align="center" colSpan={7}>Users</TableCell></TableRow>
                    <TableRow>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}> ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Name</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Email</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Contact</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>City</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Country</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Created At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row=>(
                    <TableRow key={row.createdAt} sx={{ minWidth: 650 , '&:hover': {
                        backgroundColor: 'lightgray !important',fontSize:22
                      }}} aria-label="simple table" hover={true}>
                        <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.ID}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.UserName}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.email}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.phoneno}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.city}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.country}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.createdAt.toDate().toDateString()}</TableCell>  
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
  color: green;
  height: 100vh;
  width:80vw;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;

  section.table{
    border-radius: 7em;
  box-sizing: border-box;
  height: 98%;
  width: 80%;
  align-items: center;
  border: 20rem;
  justify-content: center;
  margin-top: 5rem;
  margin-left: 5rem;
  }
  `;

