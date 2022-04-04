import React from "react";
import NavBar from "../navbar/NavBar";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ViewKit = () => {
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Kit</h3>
        </div>
      </div>
    </>
  );
};

export default ViewKit;
