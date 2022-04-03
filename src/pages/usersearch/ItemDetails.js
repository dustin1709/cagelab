import React from "react";
import { useNavigate, Navigate, Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import NavBar from '../navbar/NavBar';

const ItemDetails = () => {
  const API_URL = "http://192.168.192.31:3000/item_type/type/all";
  const [ myUser, setMyUser ] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  const [ items, setItems ] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
  }, [])

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + "/" + id);
      console.log("Fetching " + API_URL + "/" + id);
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItems(res.item_type)
    }
    loadTypes();
  }, [])

  function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    function checkTime(i) {
      return (i < 10) ? "0" + i : i;
    }
    date = yyyy + "-" + mm + "-" + dd + " " + checkTime(date.getHours()) + ":" + checkTime(date.getMinutes()) + ":" + checkTime(date.getSeconds());
    return date;
  }

  const add = async (e) => {
    e.preventDefault();
    if (quantity > 0) {
      localStorage.setItem('selected-item', id);
      localStorage.setItem('selected-item-name', items[0].model);
      localStorage.setItem('amount', quantity);
      localStorage.setItem('date', formatDate(new Date()));
    }
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
              width: "30%", clear: 'both', padding: '3%', border: '1px solid black', textAlign: 'left'
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

                <label>Quantity</label>
                <input type="number"
                            className="form-control" 
                            placeholder="Amount"
                            onChange={(e) => setQuantity(e.target.value)} />
                <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;