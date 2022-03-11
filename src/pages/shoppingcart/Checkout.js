import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

const Checkout = () => {
  const [borrower, setBorrower] = useState('');
  const [item, setItem] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setBorrower(localStorage.getItem("user"));
    }
    if (localStorage.getItem("user-item")) {
      setItem(JSON.parse(localStorage.getItem("user-item")));
    }
  }, [])

  const remove = async (e) => {
    e.preventDefault();
    localStorage.removeItem('user-item');
    navigate('/cart');
  };

  const checkout = async (e) => {
    e.preventDefault();
    localStorage.setItem('user-orderID', (borrower + Math.floor(Math.random() * 101)));
    localStorage.setItem('user-item-checked', item.name);
    localStorage.removeItem('user-item');
    navigate('/reservation');
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
                  localStorage.getItem('item') ? 
                  <tr>
                    <td>{item.name}</td>
                    <td>1</td>
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
