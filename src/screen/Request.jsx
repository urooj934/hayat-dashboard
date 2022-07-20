import React from 'react';
import { firestore } from '../firebase/firebase';
import { useState, useEffect } from 'react';
import '../App.css';
import TablePagination from '@mui/material/TablePagination';
import {Table ,TableContainer,TableHead,TableBody,TableRow,TableCell,Paper, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import swal from 'sweetalert'
import Navbar from './Navbar';

export default function Request() {
  const [page, setPage] = React.useState(0);
  const [verify,setVerify ]=useState(false);
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
  const sendmessage =(i,title)=>{
    try{
        firestore.collection('users').doc(i).collection('updates').add({
            user:i,
            title:'Food Request',
            message :'Your request of'+title+' has been verified' ,
            createdAt:new Date() ,
        })}
        catch(error){
            console.log(error).then(() => {
                alert('Oops!','something went wrong');
               });
        }
  }
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
            firestore.collection('ReqFood').doc(ID).delete().then(()=>
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
      
    getFoodRequests();
    
  },[]);
  useEffect(()=>{
      
    getFoodRequests();
    setDel(false);
  },[del]);
  useEffect(()=>{   
    getFoodRequests();
    setVerify(false);
},[verify]);
  const handleverify=(ID,uid,title)=>{
    // firestore.collection('donateobject').doc(ID).get().then((snapshot) => {
      //let DOC;
     // snapshot.forEach((doc) => {
      //  DOC=doc.data().status.toString();
        
    //  })
      // Do whatever you want with serviceCostTotal
      //console.log(DOC)
 //  if(DOC==="verified"){
   // swal("already verified");
  // }else{
      swal({
        title: "Are you sure?",
        text: "Verify this record!",
        icon: "info",
        buttons: true,
        
      })
      .then((willverify) => {
        if (willverify) {
            firestore.collection('ReqFood').doc(ID).update({
              status: 'verified',
          }).then(()=>
            {console.log('verified');
        setVerify(true);});
          swal("Record has been verified!", {
            icon: "success",
          });
          sendmessage(uid,title);
        } else {
          swal("verification cancelled");
        }
      });
   //}}).catch((error)=>{
   //alert('Alert',error.message);
 //})
    }
      const getFoodRequests =async()=>{
         const list =[];
            await  firestore.collection('ReqFood').orderBy('createdAt','desc').get()
              .then((querySnapshot)=>{
                  querySnapshot.forEach(doc=> {
                const {uid,name,category,title,location,desc,phoneno,detailedaddress,createdAt}=doc.data();
              list.push({
                ID:doc.id,
                uid,
                name,
                phoneno,
                location,
                category,
                title,
                detailedaddress,
                createdAt,
                desc,
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
            <Table sx={{border:3}} >
                <TableHead >
                  <TableRow ><TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}align="center" colSpan={11}>Food Requests</TableCell></TableRow>
                    <TableRow>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}> ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>User ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Name</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Title</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Desc</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Contact</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Location</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Address</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Created At</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Status</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Post.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row=>(
                    <TableRow key={row.createdAt} sx={{ minWidth: 650 , '&:hover': {
                        backgroundColor: 'lightgray !important',fontSize:22
                      }}} aria-label="simple table" hover={true}>
                        <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.ID}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.uid}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.name}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.title}</TableCell>
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.desc}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.phoneno}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.location}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.detailedaddress}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.createdAt.toDate().toDateString()}</TableCell> 
                    <TableCell sx={{borderBottom:0.5,borderRight:0.5,borderColor:'#a19d9d'}}>{row.status}</TableCell> 
                    <TableCell>
                      <IconButton onClick={()=>{handledelete(row.ID)}} sx={{ color:'green',alignItems:'centre'}}><DeleteIcon/></IconButton>
                      <IconButton onClick={()=>{handleverify(row.ID,row.uid,row.title)}} sx={{ color:'green',alignItems:'centre'}}><CheckCircleIcon/></IconButton></TableCell> 
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

