//import firebase from 'firebase/app';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./screen/Sidebar";
import Home from './screen/Home';
import Donations from "./screen/Donations";
import Requests from "./screen/Requests";
import Profile from "./screen/Profile";
import Riders from "./screen/Riders";
import Login from "./screen/Login";
import Navbar from "./screen/Navbar";
import Request from "./screen/Request";
import Donation from "./screen/Donation";
import Feedback from "./screen/Feedback";
import Login2 from "./screen/Login2";
import Riderform from "./screen/Riderform";
import DonateObjDelivery from "./screen/DonateObjDelivery";
import Updateobjectsdonation from "./screen/updateobjectsdonation";
import './App.css';

function App() {

  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Login2 />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/sidebar" element={<Sidebar />}></Route>
        <Route exact path="/donations" element={<Donations />}></Route>
        <Route exact path="/requests" element={<Requests />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/riders" element={<Riders />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/navbar" element={<Navbar />}></Route>
        <Route exact path="/request" element={<Request />}></Route>
        <Route exact path="/donation" element={<Donation />}></Route>
        <Route exact path="/feedback" element={<Feedback />}></Route>
        <Route exact path="/riderform" element={<Riderform />}></Route>
        <Route exact path="/donateObjDelivery" element={<DonateObjDelivery />}></Route>
        <Route exact path="/updateobjectsdonation/:id" element={<Updateobjectsdonation />}></Route>
       </Routes>
       </BrowserRouter>
      </>
  );
}

export default App;
