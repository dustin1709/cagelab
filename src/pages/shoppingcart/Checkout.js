import React from "react";
import NavBar from "../navbar/NavBar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import OrderList from "./OrderList";

const Checkout = () => {
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Review Order</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div style={{ margin: "2%" }}>
          <div id="backToCart">
            <Link to={"/cart"}>Back to Cart</Link>
          </div>
          <OrderList />

          <div className="HomeRight" id="orderSummary">
            <h4 className="subTitle">Order Summary</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="checkOutButton">
              <Link to="/OrderConfirmation">
                <Button variant="secondary">Confirm Order</Button>{" "}
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

export default Checkout;
