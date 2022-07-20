import React, {useState} from 'react';
import styled from 'styled-components';
import { MdSpaceDashboard ,MdDeliveryDining} from "react-icons/md";
import {  CgProfile } from "react-icons/cg";
import {  RiLogoutBoxLine } from "react-icons/ri";
import {GiOlive} from "react-icons/gi";
import { IoFastFood,IoSettings } from "react-icons/io5";
import {Link} from 'react-router-dom';


export default function Sidebar() {

    const [currentLink, setCurrentLink] = useState(1);

  return (
    <>
   <Section>
    <div className='top'>
      <div className='brand'>
        <GiOlive />
        <span>HAYAT</span>
      </div>
      <div className="toggle">
        <div className="links">
            <ul>
                <li  className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
                >
                    <Link to={"/home"}>
                        <MdSpaceDashboard />
                        <span>Dashboard</span>
                        </Link>
                </li>
                
                <li  className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}>
                    <Link to={"/requests"}>
                        <IoFastFood />
                        <span>Requests</span>
                    </Link>
                </li>

                <li  className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}>
                   <Link to={"/donations"}>
                        <IoFastFood />
                        <span>Donations</span>
                    </Link>
                </li>
                <li  className={currentLink === 4? "active" : "none"}
                onClick={() => setCurrentLink(4)}>
                   <Link to={"/request"}>
                        <IoFastFood />
                        <span>Donations</span>
                    </Link>
                </li>
                <li  className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}>
                   <Link to={"/donation"}>
                        <IoFastFood />
                        <span>Donations</span>
                    </Link>
                </li>
                <li  className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}>
                    <Link to={"/profile"}>
                        <CgProfile />
                        <span>Profile</span>
                    </Link>
                </li>

                <li   className={currentLink === 7 ? "active" : "none"}
                onClick={() => setCurrentLink(7)}>
                    <Link to={"/riders"}>
                        <MdDeliveryDining />
                        <span>Riders</span>
                    </Link>
                </li>
                
                <li   className={currentLink === 8 ? "active" : "none"}
                onClick={() => setCurrentLink(8)}>
                    <Link to={"/DonateObjDelivery"}>
                        <MdDeliveryDining />
                        <span>Riders</span>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div className="logout">
        <ul>
        <li>
                    <Link to={"/"}>
                        <RiLogoutBoxLine />
                        <span>LogOut</span>
                    </Link>
                </li>
        </ul>
    </div>
   </Section>
   
    </>
  );
}
const Section = styled.section`
position: fixed;
  left: 0;
  background-color: white;
  color: green;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: green;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: green;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: green;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: blueviolet;
          }
        }
        .active {
            background-color: green;
            a {
              color: black;
            }
          }
        }
    }}
    .logout {
        padding: 0.3rem 1rem;
        border-radius: 0.6rem;
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li {
              padding: 0.6rem 1rem;
              border-radius: 0.6rem;
              &:hover {
                background-color: red;
                a{
                    color: black;
                }
              }
             
            }
            a {
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                color: green;
              }
      }
`;
