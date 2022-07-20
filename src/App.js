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
import Dashboard from "./screen/dashboard";
import DonateObjDelivery from "./screen/DonateObjDelivery";
import Updateobjectsdonation from "./screen/updateobjectsdonation";
import './App.css';

function App() {

  return (
    <>
 <BrowserRouter>
       <Routes>
       <Route  path="/" element={<Login2 />}></Route>
        <Route exact path="/dashboard/*" element={<Dashboard/>}></Route>
       </Routes>
       </BrowserRouter>
      </>
  );
}

export default App;
