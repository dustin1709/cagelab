import React from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const Inventory = () => {
  const API_URL = "http://192.168.192.31:3000/itemtypes";

  const [ myUser, setMyUser ] = useState('');
  const [ state, setState ] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
  }, [])

  const [ itemTypes, setItemTypes ] = useState([]);
  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL);
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.itemtypes);
      setItemTypes(res.itemtypes);
      localStorage.setItem('items-list', JSON.stringify(res.itemtypes))
    }
    loadTypes();
  }, [])

  const next = async (e) => {
    e.preventDefault();
    if (state !== 0) {
      console.log("Option value is " + state);
      if (!localStorage.getItem('typeID')) {
        localStorage.setItem('typeID', state);
      } else {
        localStorage.removeItem('typeID');
        localStorage.setItem('typeID', state);
      }
      navigate('/staff/viewitem');
    }
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{padding: '3%', margin: '2%'}}>
          <h3>What type of item do you want to see?</h3>
          <div style={{width: "30%", clear: 'both'}}>
            <label>Choose item type</label>
            <form onSubmit={next}>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
              onChange={(e) => setState(e.target.value)}>
                <option value="0">Select item type</option>
                {
                  itemTypes.map((itemType) => (
                    <option value={itemType.typeID}>{itemType.model}</option>
                  ))
                }
              </select>
              <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Next</button>
            </form>
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
