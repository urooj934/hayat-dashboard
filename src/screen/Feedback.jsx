import React from 'react';
import { firestore } from '../firebase/firebase';
import { useState, useEffect } from 'react';
import '../App.css';
import TablePagination from '@mui/material/TablePagination';
import {Table ,TableContainer,TableHead,TableBody,TableRow,TableCell,Paper, Button, styled,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert'

export default function Feedback() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [Post,setPost]=useState([]);
  const [loading,setLoading]=useState(true);
  const [open, setOpen] = React.useState(false);
  const [del,setDel ]=useState(false);
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
            firestore.collection('feedback').doc(ID).delete().then(()=>
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
      
    getFeedback();
    
  },[]);
  useEffect(()=>{
      
    getFeedback();
    setDel(false);
},[del]);
      const getFeedback =async()=>{
         const list =[];
            await  firestore.collection('feedback').orderBy('createdAt','desc').get()
              .then((querySnapshot)=>{
                  querySnapshot.forEach(doc=> {
                    const {id,userName,feedback,email,createdAt}=doc.data();
                    list.push({
                        ID:doc.id,
                        id,
                        userName,
                        feedback,
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
        <div className='table'>
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table" sx={{borderColor:'black',border:3}} >
                <TableHead >
                    <TableRow>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}> ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}>User ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}>User Name</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}>Email</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}>Feedback</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}>createdAt</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem'}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row=>(
                    <TableRow key={row.createdAt}  sx={{ minWidth: 650 , '&:hover': {
                      backgroundColor: 'lightgray !important',fontSize:22
                    }}} aria-label="simple table" hover={true}>
                        <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'gray'}}>{row.ID}</TableCell>
                        <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'gray'}}>{row.id}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'gray'}}>{row.userName}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'gray'}}>{row.email}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'gray'}}>{row.feedback}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'gray'}}>{row.createdAt.toDate().toDateString()}</TableCell>  
                      <TableCell><Button onClick={handleOpen} sx={{ color:'green',alignItems:'centre'}}><EditIcon/></Button>
                      <Button onClick={()=>{handledelete(row.ID)}} sx={{ color:'green',alignItems:'centre'}}><DeleteIcon/></Button></TableCell>  
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
    </>
  );
}

