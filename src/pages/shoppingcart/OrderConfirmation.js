import React from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import OrderList from "./OrderList";

const OrderComfirmation = () => {
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Order Confirmation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div style={{ margin: "2%" }}>
          <OrderList />
          {/* 
          <div className="HomeRight" id="orderSummary">
            <h4 className="subTitle">Order Summary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}

          <div className="HomeRight" id="help" style={{ marginTop: "0" }}>
            <h4 className="subTitle">Need Help?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComfirmation;
