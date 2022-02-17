import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const StaffReservation = () => {

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
        <div style={{padding: '3%', backgroundColor: '#cfd0d1', margin: '2%'}}>
          <h3>Reservation</h3>
          <div style={{padding: '0.75%', clear: 'both'}}></div>
          <div style={{width: "30%", clear: 'both'}}>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="reservation-current">Current</option>
              <option value="reservation-past">Past</option>
            </select>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Username</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffReservation;
