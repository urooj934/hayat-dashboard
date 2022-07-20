import React from "react";
import { Link } from "react-router-dom";
import {  RiLogoutBoxLine } from "react-icons/ri";
import "./Button.css";

function Button() {
  return (
    <>
      <Link to="/">
        <button className="btn">
          <RiLogoutBoxLine />
          <span>LogOut</span>
        </button>
      </Link>
    </>
  );
}

export default Button;