import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import "./dashboard.css";

const StaffDashboard = () => {
  const [myUser, setMyUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="page-row">
          {/* <div className="DButton">
            <Link to="/staff/search" className="nav-link text-black">
              Search Item
            </Link>
          </div> */}

          <Link to="/staff/checkout" className="nav-link text-black DButton">
            <button type="button">Check Out</button>
          </Link>

          <Link
            to="/staff/checkin/searchbyid"
            className="nav-link text-black DButton"
          >
            <button type="button">Check In</button>
          </Link>

          <Link to="/staff/cart" className="nav-link text-black DButton">
            <button type="button">Shopping Cart</button>
          </Link>
        </div>

        <div className="page-row">
          <Link to="/staff/reservation" className="nav-link text-black DButton">
            <button type="button">Reservation</button>
          </Link>

          <Link to="/staff/kit" className="nav-link text-black DButton">
            <button type="button">Kit Requests</button>
          </Link>

          <Link to="/staff/report" className="nav-link text-black DButton">
            <button type="button">Report</button>
          </Link>
        </div>

        <div className="page-row">
          {/* <Button className="DButton" id="lastButton" variant="secondary">
            <Link to="/staff/inventory" className="nav-link text-black">
              Inventory
            </Link>
          </Button> */}

          <Link
            to="/staff/inventory"
            className="nav-link text-black DButton"
            id="lastButton"
          >
            <button type="button">Inventory</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
