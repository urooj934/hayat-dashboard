import { firestore } from '../firebase/firebase';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import React,{useEffect,useState,} from 'react';
import '../App.css';
import {Table ,TableContainer,TableHead,TableBody,TableRow,TableCell,Paper, Button} from '@mui/material';
import Navbar from './Navbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from '@mui/material/TablePagination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import swal from 'sweetalert'

    const Requests=()=>{
    const [Post,setPost]=useState([]);
    const [loading,setLoading]=useState(true);
    const [del,setDel ]=useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [verify,setVerify ]=useState(false);
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
      const sendmessage =(i,title)=>{
        try{
            firestore.collection('users').doc(i).collection('updates').add({
                user:i,
                title:'Object Request',
                message :'Your request of '+title+' has been verified ',
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
                firestore.collection('Reqobjects').doc(ID).delete().then(()=>
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
      
        getObjectReq();
        
    },[]);
    useEffect(()=>{
      
        getObjectReq();
        setDel(false);
    },[del]);
    useEffect(()=>{   
      getObjectReq();
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
            firestore.collection('Reqobjects').doc(ID).update({
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
    const getObjectReq =async()=>{
        const list =[];
        await  firestore.collection('Reqobjects').orderBy('createdAt','desc') .get()
                  .then((querySnapshot)=>{
                      querySnapshot.forEach(doc=> {
                    const {uid,name,category,title,desc,phoneno,location,detailedaddress,status,createdAt}=doc.data();
                list.push({
                    ID:doc.id,
                    name,
                    uid,
                    phoneno,
                    category,
                    location,
                    status,
                    title,
                    detailedaddress,
                    desc,
                    createdAt
                });
            })
                       })
                       setPost(list);
                if(loading){
                    setLoading(false);
                }
                 
  
      }
    return(
        <>
          
    <Section>
        <div className='table'>
        <TableContainer component={Paper}>
            <Table sx={{border:3}} >
                <TableHead >
                  <TableRow><TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}} align="center" colSpan={12}>Objects Requests</TableCell></TableRow>
                    <TableRow>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}> ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>User ID</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Name</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Title</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Desc</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Contact</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Location</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Address</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>createdAt</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Status</TableCell>
                    <TableCell sx={{backgroundColor:'purple',color:'white',fontSize:'1.3rem',fontWeight:'bold'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Post.map(row=>(
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
                    <TableCell align="center">
                      <Button onClick={()=>{handledelete(row.ID)}} sx={{ color:'green',alignItems:'centre'}}><DeleteIcon/></Button>
                      <Button onClick={()=>{handleverify(row.ID,row.uid,row.title)}} sx={{ color:'green',alignItems:'centre'}}><CheckCircleIcon/></Button></TableCell> 
                        
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
            </Section></>
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
export default Requests;