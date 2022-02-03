import React from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Cart = () => {
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Shopping Cart</h3>
        </div>

        <div style={{ margin: "2%" }}>
          <div className="HomeLeft" id="orderItems">
            <p>test item</p>
            <p>test item</p>
            <p>test item</p>
            <p>test item</p>
            <p>test item</p>
            <p>test item</p>
          </div>

          <div className="HomeRight" id="orderSummary">
            <h4 className="subTitle">Order Summary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div id="checkOutButton">
              <Link to="/checkout">
                <Button variant="secondary">Checkout</Button>{" "}
              </Link>
            </div>
          </div>

          <div className="HomeRight" id="help">
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

export default Cart;
