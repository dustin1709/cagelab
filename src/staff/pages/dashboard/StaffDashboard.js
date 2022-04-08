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
          <Button className="DButton" variant="secondary">
            <Link to="/staff/checkout" className="nav-link text-black">
              Check Out
            </Link>
          </Button>
          <Button className="DButton" variant="secondary">
            <Link
              to="/staff/checkin/searchbyid"
              className="nav-link text-black"
            >
              Check In
            </Link>
          </Button>
          <Button className="DButton" variant="secondary">
            <Link to="/staff/cart" className="nav-link text-black">
              Shopping Cart
            </Link>
          </Button>
        </div>

        <div className="page-row">
          <Button className="DButton" variant="secondary">
            <Link to="/staff/reservation" className="nav-link text-black">
              Reservations
            </Link>
          </Button>
          <Button className="DButton" variant="secondary">
            <Link to="/staff/kit" className="nav-link text-black">
              Kit Requests
            </Link>
          </Button>
          <Button className="DButton" variant="secondary">
            <Link to="/staff/report" className="nav-link text-black">
              Reports
            </Link>
          </Button>
        </div>

        <div className="page-row">
          <Button className="DButton" id="lastButton" variant="secondary">
            <Link to="/staff/inventory" className="nav-link text-black">
              Inventory
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;
