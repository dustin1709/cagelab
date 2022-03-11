import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const StaffReservation = () => {

  const [ borrower, setBorrower ] = useState('');
  const [ itemName, setItemName ] = useState('');
  const [ orderID, setOrderID ] = useState('');
  const [ today, setToday ] = useState('');
  const [ tomorrow, setTomorrow ] = useState('');

  useEffect(() => {
    if (localStorage.getItem("borrower-checked")) {
      setBorrower(localStorage.getItem("borrower-checked"));
    }
    if (localStorage.getItem("item-checked")) {
      setItemName(localStorage.getItem("item-checked"));
    }
    if (localStorage.getItem("orderID")) {
      setOrderID(localStorage.getItem("orderID"));
    }
  }, [])

  useEffect(() => {
    var today = new Date();
    setToday(formatDate(today));
    var tomorrow = new Date(new Date(today).getTime() + 60 * 60 * 24 * 1000);
    setTomorrow(formatDate(tomorrow));
  }, [])

  function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
    return date;
  }

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{padding: '3%', backgroundColor: '#cfd0d1', margin: '2%'}}>
          <h3>Borrower Check Out History</h3>
          <div style={{padding: '0.75%', clear: 'both'}}></div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Username</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Return By Date</th>
                <th scope="col">Pick Up (Yes/No)</th>
              </tr>
            </thead>
            <tbody>
              {
                localStorage.getItem("item-checked") ?
                <tr>
                  <td>{orderID}</td>
                  <td>{borrower}</td>
                  <td>{itemName}</td>
                  <td>1</td>
                  <td>{today}</td>
                  <td>{tomorrow}</td>
                  <td>Yes</td>
                </tr> :
                <tr></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffReservation;
