import React from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const ViewItem = () => {
  const API_URL = "http://192.168.192.31:3000/item_type/type/all/";
  const API_URL_INST = "http://192.168.192.31:3000/item_instance/type/quantity/";
  const [ myUser, setMyUser ] = useState('');
  const navigate = useNavigate();
  const [ items, setItems ] = useState([]);
  const [ amount, setAmount ] = useState(0);
  const [ borrower, setBorrower ] = useState('');
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
    if (!localStorage.getItem("typeID")) {
      navigate('/staff/inventory');
    }
  }, [])

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + localStorage.getItem("typeID"));
      let result2 = await fetch(API_URL_INST + localStorage.getItem("typeID"));
      console.log("Fetching " + API_URL + "/" + localStorage.getItem("typeID"));
      if(!result.ok) throw Error("Unable to get item types");
      if(!result2.ok) throw Error("Unable to get item instances");
      let res = await result.json();
      let res2 = await result2.json();
      console.log(res.item_type);
      setAmount(res2.item_instance[0].total_items);
      setItems(res.item_type);
    }
    loadTypes();
  }, [])

  const add = async (e) => {
    e.preventDefault();
    console.log("Item " + localStorage.getItem('typeID') + " added to cart.");
    localStorage.setItem('item', JSON.stringify(items[0]));
    localStorage.setItem('borrower', borrower);
    localStorage.removeItem('typeID');
    navigate('/staff/cart');
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{padding: '3%', margin: '2%'}}>
          {items.map((item) => (<h3>{item.model}</h3>))}
          <h5>Quantity available: {amount}</h5>
          <div style={{width: "100%", clear: 'both'}}>
            <label style={{padding: '1%'}}>Instance Lending</label>
            <form onSubmit={add} style={{
              width: "30%", clear: 'both', padding: '1%', border: '1px solid black', textAlign: 'center'
            }}>
                <input type="text" 
                            className="form-control" 
                            placeholder="Enter Borrower's Username"
                            onChange={(e) => setBorrower(e.target.value)} />
                {
                  items.map((item) => (
                    <div>
                      <h5>Name: {item.name}</h5>
                      <h5>Model: {item.model}</h5>
                      <h5>Cost: {item.cost}</h5>
                    </div>
                  ))
                }
                <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItem;