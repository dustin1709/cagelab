import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import "./staffsearch.css";

const StaffSearch = () => {

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
          <h3>What type of item do you want?</h3>
          <div id="MySearchButton">
            <Link to="/staff/searchbyid" style={{textDecoration: "none"}}>Search by ID</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffSearch;
