import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const StaffKit = () => {

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
              <option value="kit-current">Current Kit</option>
              <option value="kit-past">Past Kit</option>
              <option value="kit-past">Pending Kit</option>
            </select>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Course</th>
                <th scope="col">Kit Name</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>01</td>
                  <td>ISTE 500</td>
                  <td>Kit</td>
                  <td><button type="button" className="btn btn-light">View</button></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffKit;