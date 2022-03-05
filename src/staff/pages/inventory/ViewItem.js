import React from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const ViewItem = () => {
  const API_URL = "http://192.168.192.31:3000/itemtypes";
  const [ myUser, setMyUser ] = useState('');
  const navigate = useNavigate();
  const [ itemID, setItemID ] = useState(0);
  const [ item, setItem ] = useState();
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
    if (localStorage.getItem("typeID")) {
        setItemID(localStorage.getItem("typeID"));
    }
  }, [])

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL);
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.itemtypes);
      setItem((res.itemtypes).filter((itemType) => itemType.typeID == itemID))
    }
    loadTypes();
  }, [])

  const add = async (e) => {
    e.preventDefault();
    console.log("Item added to cart.");
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{padding: '3%', margin: '2%'}}>
          <h3>What type of item do you want to see?</h3>
          <div style={{width: "30%", clear: 'both'}}>
            <label>Choose item type</label>
            <form onSubmit={add}>
                <h5>{item.name}</h5>
                <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Add</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItem;