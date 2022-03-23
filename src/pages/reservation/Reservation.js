import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Reservation = () => {
  const API_URL = "http://192.168.192.31:3000/borrower_item/user/";
  const [borrower, setBorrower] = useState('');
  const [uniID, setUniID] = useState('');
  const [itemName, setItemName] = useState('');
  const [ orderID, setOrderID ] = useState('');
  const [ today, setToday ] = useState('');
  const [ status, setStatus ] = useState('unpickedupReservation');
  const [ tomorrow, setTomorrow ] = useState('');

  const [ list, setList ] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("user-id")) {
      setBorrower(localStorage.getItem("user"));
      setUniID(localStorage.getItem("user-id"))
    }
    if (localStorage.getItem("user-item-checked")) {
      setItemName(localStorage.getItem("user-item-checked"));
    }
    if (localStorage.getItem("user-orderID")) {
      setOrderID(localStorage.getItem("user-orderID"));
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

  const submit = async (e) => {
    e.preventDefault();
    const url = API_URL+status+"/"+uniID;
    console.log("GET: "+url);
    let result = await fetch(url);
    if (!result.ok) throw Error('Did not receive reservation data');
    let res = await result.json();
    
  }

  return (
    <>
        <NavBar />
        <div className='mainContainerRight'>
          <div style={{padding: '3%', backgroundColor: '#cfd0d1', margin: '2%'}}>
            <h3>My Reservation</h3>
            <div style={{clear: 'both'}}></div>
            <p>Your reservation list</p>
            <div style={{clear: 'both'}}></div>
            <form onSubmit={submit}>
            <div style={{width: "72%", float: 'left'}}>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}>
                  <option value="unpickedupReservation">Pickup Pending</option>
                  <option value="unreturnedReservation">Returned Pending</option>
                  <option value="returnedReservation">Returned</option>
              </select>
            </div>
            <button style={{width: "20%", float: 'right'}} type="submit" className="btn btn-secondary btn-lg btn-block">Filter</button>
            </form>
            <div style={{padding: '0.25%', clear: 'both'}}></div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Borrow Date</th>
                  <th scope="col">Return By</th>
                  <th scope="col">Picked up (Yes/No)</th>
                </tr>
              </thead>
              <tbody>
                {
                  localStorage.getItem("user-item-checked") ?
                  <tr>
                    <td>{orderID+borrower}</td>
                    <td>{itemName}</td>
                    <td>1</td>
                    <td>{today}</td>
                    <td>{tomorrow}</td>
                    <td>No</td>
                  </tr> :
                  <tr></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default Reservation;