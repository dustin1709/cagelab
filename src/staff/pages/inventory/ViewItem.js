import React from "react";
import { useNavigate, Navigate, Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const ViewItem = () => {
  const API_URL = "http://192.168.192.31:3000/item_type/type/all/";
  const API_URL_INST =
    "http://192.168.192.31:3000/item_instance/type/quantity/";
  const url_reserved =
    "http://192.168.192.31:3000/borrower_item/type/quantityReserved/";
  const url_checkedout =
    "http://192.168.192.31:3000/borrower_contents/type/quantityCheckedout/";
  const [myUser, setMyUser] = useState("");
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(0);
  const [reserve, setReserve] = useState(0);
  const [borrower, setBorrower] = useState("");
  const { id } = useParams();
  useEffect(() => {
    console.log("item id is: " + id);
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + id);
      let result2 = await fetch(API_URL_INST + id);
      let reserved = await fetch(url_reserved + id);
      let checkedout = await fetch(url_checkedout + id);
      console.log("Fetching " + API_URL + "/" + id);
      if (!result.ok) throw Error("Unable to get item types");
      if (!result2.ok) throw Error("Unable to get item instances");
      let res = await result.json();
      let res2 = await result2.json();
      let resR = await reserved.json();
      let resC = await checkedout.json();
      console.log(res.item_type);
      setAmount(res2.item_instance[0].total_items);
      setCheck(resC.borrower_contents[0].amount);
      setReserve(resR.borrower_item[0].amount);
      setItems(res.item_type);
    };
    loadTypes();
  }, []);

  const add = async (e) => {
    e.preventDefault();
    if (!localStorage.getItem("item")) {
      localStorage.setItem("item", JSON.stringify(items[0]));
      localStorage.setItem("borrower", borrower);
      navigate("/staff/cart");
    } else {
      alert("Remove or Complete current reservation in cart first.");
    }
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{ padding: "3%", margin: "2%" }}>
          <Link
            to="/staff/inventory"
            className="btn btn-primary btn-lg btn-block"
            style={{ padding: "0.5%", marginBottom: "1%" }}
          >
            Back to Inventory
          </Link>

          {items.map((item) => (
            <div>
              <h5>Name: {item.name}</h5>
              <h5>Model: {item.model}</h5>
              <h5>Cost: {item.cost}</h5>
            </div>
          ))}

          <br></br>
          <div style={{ width: "100%", clear: "both" }}>
            <h3 style={{ padding: "1%" }}>Instance Lending</h3>
            <form
              onSubmit={add}
              style={{
                width: "30%",
                clear: "both",
                padding: "1%",
                textAlign: "left",
              }}
            >
              <label>University ID:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Borrower's UID"
                onChange={(e) => setBorrower(e.target.value)}
              />
              <div style={{ padding: "3%", clear: "both" }}></div>
              <h3>Item Info:</h3>
              {items.map((item) => (
                <h3>{item.model}</h3>
              ))}
              <h5>Quantity: {amount}</h5>
              <h5>Checked Out Items: {check}</h5>
              <h5>Reserved Items: {reserve}</h5>
              <h5>Available: {amount - (check + reserve)}</h5>
              <button
                type="submit"
                id="login-button"
                className="btn btn-secondary btn-lg btn-block"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItem;
