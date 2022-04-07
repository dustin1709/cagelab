import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import * as FaIcons from "react-icons/fa";

const StaffCart = () => {
  const [myUser, setMyUser] = useState("");
  const [borrower, setBorrower] = useState("");
  const [item, setItem] = useState("");
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
  }, []);

  const remove = async (e) => {
    e.preventDefault();
    localStorage.removeItem("borrower");
    localStorage.removeItem("item");
    navigate("/staff/cart");
  };

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

  const checkout = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("item")) {
      const instance = {
        universityID: borrower,
        reservationTime: formatDate(new Date()),
      };
      console.log(JSON.stringify(instance));
      const postCmd = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(instance),
      };
      const response = await fetch(
        "http://192.168.192.31:3000/borrower_item/reservation",
        postCmd
      );
      if (!response.ok)
        throw Error("Something wrong... - borrower_item/reservation");
      let res = await response.json();

      let reservationID = res.borrower_item.insertId;
      const instance2 = { reservationID, typeID: item.typeID, quantity: 1 };
      console.log(JSON.stringify(instance2));
      const postCmd2 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(instance2),
      };
      const response2 = await fetch(
        "http://192.168.192.31:3000/reservation_contents/addType",
        postCmd2
      );
      if (!response2.ok)
        throw Error("Something wrong... - reservation_contents/addType");

      // remove localstorage items
      localStorage.removeItem("item");
      localStorage.removeItem("borrower");
      navigate("/staff/reservation");
    }
  }; //checkout()

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{ padding: "3%", margin: "1%" }}>
          <h3>Shopping Cart</h3>
          <div style={{ padding: "0.75%", clear: "both" }}></div>
          <div style={{ width: "60%", float: "left" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Borrower</th>
                  <th scope="col">Model Name</th>
                  <th scope="col">Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {localStorage.getItem("item") ? (
                  <tr>
                    <td>{borrower}</td>
                    <td>{item.name}</td>
                    <td>1</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={remove}
                      >
                        <FaIcons.FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
          <div style={{ width: "40%", float: "right" }}>
            <div
              style={{
                marginLeft: "10%",
                marginRight: "8%",
                padding: "5%",
                backgroundColor: "#cfd0d1",
              }}
            >
              <h5>Order Summary</h5>
              <p>If you are ready, click "Reserve".</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={checkout}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffCart;
