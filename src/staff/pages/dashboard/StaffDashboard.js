import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import "./dashboard.css";

const StaffDashboard = () => {

  const [ myUser, setMyUser ] = useState('');
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
  }, [])

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="page-row">
          <div className="DButton">
            <Link to="/staff/search" className="nav-link text-black">
              Search Item
            </Link>
          </div>
          <div className="DButton">
            <Link to="/staff/checkin" className="nav-link text-black">
              Check in
            </Link>
          </div>
          <div className="DButton">
            <Link to="/staff/cart" className="nav-link text-black">
              Shopping Cart
            </Link>
          </div>
        </div>

        <div className="page-row">
          <div className="dashboard-comp">
            <h4>Reservation</h4>
            <ul>

            </ul>
            <Link to="/staff/reservation">
              <Button variant="secondary">View Details</Button>{" "}
            </Link>
          </div>
          <div className="dashboard-comp">
            <h4>Kit Request</h4>
            <ul>

            </ul>
            <Link to="/staff/kit">
              <Button variant="secondary">View Details</Button>{" "}
            </Link>
          </div>
        </div>

        <div className="page-row">
          <div className="DButton">
            <Link to="/staff/inventory" className="nav-link text-black">
              Iventory
            </Link>
          </div>
          <div className="DButton">
            <Link to="/staff/report" className="nav-link text-black">
              Report
            </Link>
          </div>
          <div className="DButton">
            <Link to="/staff/settings" className="nav-link text-black">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
