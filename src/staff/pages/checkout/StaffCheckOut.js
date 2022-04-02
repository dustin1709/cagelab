import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import "./checkout.css";

const StaffCheckOut = () => {

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
        <div style={{ padding: "50px" }}>
          <h3>Check out Item</h3>
          <div id="flexRow">
            <div className="TabButton">
              <Link to="" style={{textDecoration: "none", color: "black"}}>
                Scan Item
              </Link>
            </div>
            <div className="TabButton">
              <Link to="/staff/checkin/searchbyid" style={{textDecoration: "none", color: "black"}}>
                Enter Item ID (Barcode)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffCheckOut;
