import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

const Checkout = () => {
  const API_URL = "http://192.168.192.31:3000/";

  const [borrower, setBorrower] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-id")) {
      setBorrower(localStorage.getItem("user-id"));
    }
    if (localStorage.getItem("selected-item")) {
      setName(localStorage.getItem("selected-item-name"));
      setId(localStorage.getItem("selected-item"));
      setDate(localStorage.getItem("date"));
      setQuantity(localStorage.getItem("amount"));
    }
  }, [])

  const remove = async (e) => {
    e.preventDefault();
    localStorage.removeItem("selected-item");
    localStorage.removeItem("selected-item-name");
    localStorage.removeItem('amount');
    localStorage.removeItem('date');
    navigate('/cart');
  };

  const checkout = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("selected-item")) {
      const instance = {universityID: borrower, reservationTime: date};
      console.log(JSON.stringify(instance));
      const postCmd = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(instance)
      }
      const response = await fetch(API_URL+"borrower_item/reservation", postCmd);
      if (!response.ok) throw Error('Something wrong... - borrower_item/reservation')
      let res = await response.json();
      
      let reservationID = res.borrower_item.insertId;
      const instance2 = {reservationID, typeID: id, quantity};
      console.log(JSON.stringify(instance2));
      const postCmd2 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(instance2)
      }
      const response2 = await fetch(API_URL+"reservation_contents/addType", postCmd2);
      if (!response2.ok) throw Error('Something wrong... - reservation_contents/addType')

      // remove localstorage items
      localStorage.removeItem("selected-item");
      localStorage.removeItem("selected-item-name");
      localStorage.removeItem('amount');
      localStorage.removeItem('date');
      navigate('/reservation');
    }
  }
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
      <div style={{ padding: '3%', margin: '1%' }}>
          <h3>Shopping Cart</h3>
          <div style={{ padding: '0.75%', clear: 'both' }}></div>
          <div style={{ width: '60%', float: 'left' }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  localStorage.getItem('selected-item') ? 
                  <tr>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td><button type="button" className="btn btn-danger" onClick={remove}><FaIcons.FaTrashAlt /></button></td>
                  </tr> : 
                  <tr></tr>
                }
              </tbody>
            </table>
          </div>
          <div style={{ width: '40%', float: 'right' }}>
            <div style={{ marginLeft: '10%', marginRight: '8%', padding: '5%', backgroundColor: '#cfd0d1' }}>
              <h5>Order Summary</h5>
              <p>If you are ready, click "Check out".</p>
              <button type="button" className="btn btn-secondary" onClick={checkout}>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
