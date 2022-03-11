import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import * as FaIcons from 'react-icons/fa';

const StaffCart = () => {

  const [ myUser, setMyUser ] = useState('');
  const [borrower, setBorrower] = useState('');
  const [item, setItem] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
    if (localStorage.getItem("borrower")) {
      setBorrower(localStorage.getItem("borrower"));
    }
    if (localStorage.getItem("item")) {
      setItem(JSON.parse(localStorage.getItem("item")));
    }
  }, [])

  const remove = async (e) => {
    e.preventDefault();
    localStorage.removeItem('borrower');
    localStorage.removeItem('item');
    navigate('/staff/cart');
  };

  const checkout = async (e) => {
    e.preventDefault();
    localStorage.setItem('orderID', (borrower + Math.floor(Math.random() * 101)));
    localStorage.setItem('borrower-checked', borrower);
    localStorage.setItem('item-checked', item.name);
    localStorage.removeItem('borrower');
    localStorage.removeItem('item');
    navigate('/staff/reservation');
  }

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{ padding: '3%', margin: '1%' }}>
          <h3>Shopping Cart</h3>
          <div style={{ padding: '0.75%', clear: 'both' }}></div>
          <div style={{ width: '60%', float: 'left' }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Borrower</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  localStorage.getItem('item') ? 
                  <tr>
                    <td>{borrower}</td>
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

export default StaffCart;
