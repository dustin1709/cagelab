import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Reservation = () => {
  const API_URL = "http://192.168.192.31:3000/borrower_item/user/";
  const [borrower, setBorrower] = useState("");
  const [itemName, setItemName] = useState("");
  const [orderID, setOrderID] = useState("");
  const [today, setToday] = useState("");
  const [status, setStatus] = useState("unpickedupReservation");
  const [tomorrow, setTomorrow] = useState("");

  const [list, setList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user") && localStorage.getItem("user-id")) {
      setBorrower(localStorage.getItem("user"));
    }
    if (localStorage.getItem("user-item-checked")) {
      setItemName(localStorage.getItem("user-item-checked"));
    }
    if (localStorage.getItem("user-orderID")) {
      setOrderID(localStorage.getItem("user-orderID"));
    }
  }, []);

  useEffect(() => {
    var today = new Date();
    setToday(formatDate(today));
    var tomorrow = new Date(new Date(today).getTime() + 60 * 60 * 24 * 1000);
    setTomorrow(formatDate(tomorrow));
  }, []);

  function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + "/" + dd + "/" + yyyy;
    return date;
  }

  const [itemTypes, setItemTypes] = useState([]);
  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch("http://192.168.192.31:3000/item_types");
      if (!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      setItemTypes(res.item_type);
    };
    const loadTypes2 = async () => {
      const url = API_URL + status + "/" + localStorage.getItem("user-id");
      console.log("GET: " + url);
      let result = await fetch(url);
      if (!result.ok) throw Error("Did not receive reservation data");
      let res = await result.json();
      setList(res.borrower_item);
      // let result2 = await fetch("http://192.168.192.31:3000/reservation_contents/reservation/all/"+res.borrower_item[0].reservationID);
      // let res2 = await result2.json();
      // setList(res2.reservation_contents);
    };
    loadTypes2();
    loadTypes();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    // const url = API_URL + status + "/" + localStorage.getItem("user-id");
    const url =
      API_URL + "unpickedupReservation/" + localStorage.getItem("user-id");
    console.log("GET: " + url);
    let result = await fetch(url);
    if (!result.ok) {
      setList([]);
    } else {
      let res = await result.json();
      setList(res.borrower_item);
    }
    // let result2 = await fetch("http://192.168.192.31:3000/reservation_contents/reservation/all/"+res.borrower_item[0].reservationID);
    // let res2 = await result2.json();
    // console.log(res2.reservation_contents);
    // setList(res2.reservation_contents);
  };

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div
          style={{ padding: "3%", backgroundColor: "#cfd0d1", margin: "2%" }}
        >
          <h3>My Reservations</h3>
          <div style={{ padding: "0.5%", clear: "both" }}></div>
          {/* <form onSubmit={submit}>
            <div style={{ width: "80%", float: "left" }}>
              <select
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="unpickedupReservation">Pickup Pending</option>
                <option value="unreturnedReservation">Return Pending</option>
                <option value="returnedReservation">Returned</option>
              </select>
            </div>
            <button
              style={{ width: "18%", float: "right" }}
              type="submit"
              className="btn btn-secondary btn-lg btn-block"
            >
              Apply filter
            </button>
          </form> */}
          <div style={{ padding: "0.25%", clear: "both" }}></div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Model Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {/* {
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
                } */}
              {list.length > 0 ? (
                list.map((list_item) => (
                  <tr>
                    <td>
                      {itemTypes.map((itemType) =>
                        itemType.typeID === list_item.typeID
                          ? itemType.model
                          : ""
                      )}
                    </td>
                    <td>{list_item.quantity}</td>
                  </tr>
                ))
              ) : (
                <p>There is no record.</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reservation;
