import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

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
        
      </div>
    </>
  );
};

export default StaffSearch;
