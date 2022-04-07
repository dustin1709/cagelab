import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const StaffCheckOut = () => {
  const navigate = useNavigate();
  const API_URL = "http://192.168.192.31:3000/";
  const [itemID, setItemID] = useState("");
  const [resID, setResID] = useState("");
  const [myUser, setMyUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();
    function checkTime(i) {
      return i < 10 ? "0" + i : i;
    }
    date =
      yyyy +
      "-" +
      mm +
      "-" +
      dd +
      " " +
      checkTime(date.getHours()) +
      ":" +
      checkTime(date.getMinutes()) +
      ":" +
      checkTime(date.getSeconds());
    return date;
  }

  const checkin = async (e) => {
    e.preventDefault();
    const instance = { reservationID: resID, itemID: itemID };
    console.log(JSON.stringify(instance));
    const postCmd = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instance),
    };
    const response = await fetch(
      API_URL + "borrower_contents/addItem",
      postCmd
    );
    const instance2 = {
      reservationID: resID,
      checkout: formatDate(new Date()),
    };
    console.log(JSON.stringify(instance2));
    const patchCmd = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instance2),
    };
    const response2 = await fetch(API_URL + "borrower_item/pickup", patchCmd);
    if (response.ok && response2.ok) {
      alert(
        "Reservation " +
          resID +
          " with Item ID " +
          itemID +
          " checked out complete."
      );
      navigate("/staff/reservation");
    }
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{ padding: "50px" }}>
          <h3>Check out Item</h3>
          <div style={{ padding: "2%" }}></div>
          <form className="" onSubmit={checkin}>
            <label>Reservation ID</label>
            <input
              style={{ width: "60%" }}
              type="text"
              className="form-control rounded"
              placeholder="Enter Reservation ID"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => setResID(e.target.value)}
            />

            <div style={{ padding: "1%" }}></div>

            <label>Item ID</label>
            <input
              style={{ width: "60%" }}
              type="text"
              className="form-control rounded"
              placeholder="Enter Item ID"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => setItemID(e.target.value)}
            />

            <div style={{ padding: "1.5%" }}></div>
            <button type="submit" className="btn btn-dark">
              Check Out Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StaffCheckOut;
