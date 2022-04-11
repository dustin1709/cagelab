import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import * as FaIcons from "react-icons/fa";

const StaffNavBar = () => {
  const navigate = useNavigate();

  const logOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/staff");
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white MyNavBar"
      style={{ backgroundColor: "#F29441" }}
    >
      <img src={logo} alt="Logo" width="55%" />
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <NavLink
            to="/staff/dashboard"
            activeclassname="active"
            className="nav-link text-white"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/checkout"
            activeclassname="active"
            className="nav-link text-white"
          >
            Check Out
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/checkin/"
            activeclassname="active"
            className="nav-link text-white"
          >
            Check In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/cart"
            activeclassname="active"
            className="nav-link text-white"
          >
            Shopping Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/reservation"
            activeclassname="active"
            className="nav-link text-white"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/kit"
            activeclassname="active"
            className="nav-link text-white"
          >
            Kit Requests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/inventory"
            activeclassname="active"
            className="nav-link text-white"
          >
            Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/staff/report"
            activeclassname="active"
            className="nav-link text-white"
          >
            Report
          </NavLink>
        </li>
        <div style={{ padding: "5%", clear: "both" }}></div>
        <hr />
        <li>
          <button type="button" className="btn" onClick={logOut}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default StaffNavBar;
