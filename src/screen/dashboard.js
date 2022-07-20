import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {MdDeliveryDining} from "react-icons/md";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home' ;
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { BrowserRouter, Route, Routes, useNavigate, } from "react-router-dom";
import Home from './Home';
import Donations from "./Donations";
import Requests from "./Requests";
import Profile from "./Profile";
import Riders from "./Riders";
import Navbar from "./Navbar";
import Request from "./Request";
import Donation from "./Donation";
import Feedback from "./Feedback";
import ReqObjDelivery from './ReqObjDelivery';
import DonateObjDelivery from './DonateObjDelivery';
import Login2 from "./Login2";
import Riderform from "./Riderform";
import DonateFoodDelivery from './DonateFoodDelivery';
import Updateobjectsdonation from "./updateobjectsdonation";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InterestsIcon from '@mui/icons-material/Interests';
import PersonIcon from '@mui/icons-material/Person';
import ReqFoodDelivery from './ReqFoodDelivery';
const drawerWidth = 240;

export default function ClippedDrawer() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
      };
      const handleClick2 = () => {
        setOpen2(!open2);
      };
      const handleClick3 = () => {
        setOpen3(!open3);
      };
      const handleClick4 = () => {
        setOpen4(!open4);
      };
  
  return (
    <Box  sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar  position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{color:'white',background:'blueviolet',width:1300}} >
        <img sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={require('./logo.png')} width={45} />
         <Typography    
                 variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              color:'white',
              marginLeft:1,
              textDecoration: 'none',
            }}> HAYAT</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
   <ListItemButton onClick={()=> navigate("home")}>
    <ListItemIcon style={{color:'black'}}>
    <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" Fontweight="Bold"/>
   </ListItemButton>
   <ListItemButton onClick={()=> navigate("Profile")}>
    <ListItemIcon style={{color:'black'}}>
    <PersonIcon />
    </ListItemIcon >
    <ListItemText primary="Users" fontWeight="Bold"/>
   </ListItemButton>
   <ListItemButton onClick={handleClick}>
        <ListItemIcon style={{color:'black'}} >
          < VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="Donations" />
        { open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("donations") }>
            <ListItemIcon style={{color:'black'}}>
           < FastfoodIcon/>
            </ListItemIcon>
            <ListItemText primary="Food" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("donation") }>
            <ListItemIcon style={{color:'black'}}>
            < InterestsIcon/>
            </ListItemIcon>
            <ListItemText primary="Objects" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon style={{color:'black'}}>
          < VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="Requests" />
        { open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("Request")}>
            <ListItemIcon style={{color:'black'}}>
           < FastfoodIcon/>
            </ListItemIcon>
            <ListItemText primary="Food" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("Requests")}>
            <ListItemIcon style={{color:'black'}}>
              < InterestsIcon/>
            </ListItemIcon>
            <ListItemText primary="Objects" />
          </ListItemButton>
        </List>
      </Collapse>
          </List>
          <Divider />
          <List>
   <ListItemButton onClick={ handleClick4 }>
        <ListItemIcon style={{color:'black'}}>
        <MdDeliveryDining  size={30}/>
        </ListItemIcon>
        <ListItemText primary="Riders" />
        { open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("Riderform") }>
            <ListItemIcon style={{color:'black'}}>
           < FastfoodIcon/>
            </ListItemIcon>
            <ListItemText primary="Add Rider" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("Riders") }>
            <ListItemIcon style={{color:'black'}}>
            < InterestsIcon/>
            </ListItemIcon>
            <ListItemText primary="Riders Record" />
          </ListItemButton>
        </List>
      </Collapse>
   <ListItemButton onClick={handleClick2}>
        <ListItemIcon style={{color:'black'}}>
          < VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="Donations Delivery" />
        { open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("DonateFoodDelivery") }>
            <ListItemIcon style={{color:'black'}}>
           < FastfoodIcon/>
            </ListItemIcon>
            <ListItemText primary="Food Delivery" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("DonateObjDelivery") }>
            <ListItemIcon style={{color:'black'}}>
            < InterestsIcon/>
            </ListItemIcon>
            <ListItemText primary="Objects Delivery" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick3}>
        <ListItemIcon style={{color:'black'}}>
          < VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="Request Delivery  " />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("ReqFoodDelivery")}>
            <ListItemIcon style={{color:'black'}}>
           < FastfoodIcon/>
            </ListItemIcon>
            <ListItemText primary="Food Delivery" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=> navigate("ReqObjDelivery")}>
            <ListItemIcon style={{color:'black'}}>
              < InterestsIcon/>
            </ListItemIcon>
            <ListItemText primary="Objects Delivery" />
          </ListItemButton>
        </List>
      </Collapse>
          </List>
          <Divider />
          <List>
          <ListItemButton onClick={()=> navigate("feedback")}>
    <ListItemIcon style={{color:'black'}}>
    <MailIcon color='#0971f1'/>
    </ListItemIcon>
    <ListItemText primary="Feedback" Fontweight="Bold"/>
   </ListItemButton>
   <ListItemButton onClick={()=> navigate("Profile")}>
    <ListItemIcon style={{color:'black'}}>
    <PowerSettingsNewIcon color='#0971f1'/>
    </ListItemIcon>
    <ListItemText primary="LogOut" Fontweight="Bold"/>
   </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,boxSizing: 'border-box'}}>
        <Toolbar />
        <Routes>
        <Route exact path="home" element={<Home />}></Route>
        <Route exact path="donations" element={<Donations />}></Route>
        <Route exact path="/requests" element={<Requests />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/riders" element={<Riders />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/navbar" element={<Navbar />}></Route>
        <Route exact path="/request" element={<Request />}></Route>
        <Route exact path="/donation" element={<Donation />}></Route>
        <Route exact path="/feedback" element={<Feedback />}></Route>
        <Route exact path="/riderform" element={<Riderform />}></Route>
        <Route exact path="/DonateObjDelivery" element={<DonateObjDelivery />}></Route>
        <Route exact path="/DonateFoodDelivery" element={<DonateFoodDelivery />}></Route>
        <Route exact path="/ReqFoodDelivery" element={<ReqFoodDelivery />}></Route>
        <Route exact path="/ReqObjDelivery" element={<ReqObjDelivery />}></Route>
        <Route exact path="/updateobjectsdonation" element={<Updateobjectsdonation />}></Route>
       </Routes>
      </Box>
      </Box>
  );
}