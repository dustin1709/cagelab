import React from "react";
import { useNavigate, Navigate, Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import NavBar from '../navbar/NavBar';

const ItemDetails = () => {
  const API_URL = "http://192.168.192.31:3000/item_type/type/all";
  const [ myUser, setMyUser ] = useState('');
  const navigate = useNavigate();
  const [ items, setItems ] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
    if (!localStorage.getItem("user-typeID")) {
      navigate('/search/results');
    }
  }, [])

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + "/" + localStorage.getItem("user-typeID"));
      console.log("Fetching " + API_URL + "/" + localStorage.getItem("user-typeID"));
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItems(res.item_type)
    }
    loadTypes();
  }, [])

  const add = async (e) => {
    e.preventDefault();
    console.log("Item " + localStorage.getItem('typeID') + " added to cart.");
    localStorage.setItem('user-item', JSON.stringify(items[0]));
    localStorage.removeItem('user-typeID');
    navigate('/cart');
  };

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div style={{padding: '3%', margin: '2%'}}>
          {items.map((item) => (<h3>{item.model}</h3>))}
          <div style={{width: "100%", clear: 'both'}}>
            <label style={{padding: '1%'}}>Borrow this item</label>
            <form onSubmit={add} style={{
              width: "30%", clear: 'both', padding: '1%', border: '1px solid black', textAlign: 'center'
            }}>
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

export default ItemDetails;