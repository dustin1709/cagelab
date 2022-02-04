import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Home = () => {

  const [ myUser, setMyUser ] = useState('');
  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
  }, [])

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div
          style={{ padding: "3%", backgroundColor: "#cfd0d1", margin: "2%" }}
        >
          <h3>Welcome, {myUser}</h3>

          <div style={{ padding: "1.5%", clear: "both" }}></div>
          <p>
            You are currently on RIT CageLab site. Students can reserve items to
            borrow for their courses while professors can borrow, but also
            create a kit for the courses that they teach.
          </p>
          <div style={{ padding: "1%", clear: "both" }}></div>
        </div>

        <div style={{ margin: "2%" }}>
          <div className="HomeLeft">
            <h5 style={{ textAlign: "center" }}>My Reservation</h5>
            <div class="viewDetailsButton">
              <Link to="/reservation">
                <Button variant="secondary">View Details</Button>{" "}
              </Link>
            </div>
          </div>

          <div className="HomeRight">
            <h5 style={{ textAlign: "center" }}>My Shopping Cart</h5>
            <div class="viewDetailsButton">
              <Link to="/cart">
                <Button variant="secondary">View Details</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
