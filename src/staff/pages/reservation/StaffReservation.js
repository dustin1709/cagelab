import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const StaffReservation = () => {
  const url = "http://192.168.192.31:3000/borrower_item/none/";
  const [history, setHistory] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getReservationHistory = async () => {
      let result = await fetch(url + "reservations");
      if (!result.ok) throw Error("Unable to get " + url + "reservations");
      let res = await result.json();
      setHistory(res.borrower_item);
    };
    const loadTypes = async () => {
      let result = await fetch("http://192.168.192.31:3000/item_types");
      if (!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItems(res.item_type);
    };
    loadTypes();
    getReservationHistory();
  }, []);

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div
          style={{ padding: "3%", backgroundColor: "#cfd0d1", margin: "2%" }}
        >
          <h3>Reservation History</h3>
          <div style={{ padding: "0.75%", clear: "both" }}></div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Reservation ID</th>
                <th scope="col">University ID</th>
                <th scope="col">Reservation Time</th>
                <th scope="col">Quantity</th>
                <th scope="col">Model</th>
                <th scope="col">Checkout Time</th>
              </tr>
            </thead>
            <tbody>
              {history.length > 0 ? (
                history.map((History) => (
                  <tr>
                    <td>{History.reservationID}</td>
                    <td>{History.universityID}</td>
                    <td>{History.reservationTime}</td>
                    <td>{History.quantity}</td>
                    <td>
                      {items.map((item) =>
                        item.typeID === History.typeID ? item.model : ""
                      )}
                    </td>
                    <td>
                      {History.checkout
                        ? History.checkout
                        : "[check out pending]"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>No record to display</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StaffReservation;
