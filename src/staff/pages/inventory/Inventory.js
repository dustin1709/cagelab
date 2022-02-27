import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const Inventory = () => {

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
        <div style={{padding: '3%', margin: '2%'}}>
          <h3>What type of item do you want to see?</h3>
          <div style={{width: "30%", clear: 'both'}}>
            <label>Choose item type</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="NA">Type1</option>
              <option value="NA">Type2</option>
            </select>
          </div>
          <div style={{paddingTop: "1%", clear: 'both'}}>
            <label>else</label>
            <div style={{paddingTop: "2%", clear: 'both'}}></div>
            <Link to="/staff/addItem">
              <Button variant="primary" id="newItem">
                Add New Item
              </Button>
            </Link>
            <div style={{paddingTop: "0.5%", clear: 'both'}}></div>
            <Link to="/staff/addItemType">
              <Button variant="dark" id="newItemType">
                Add New Item Type
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
