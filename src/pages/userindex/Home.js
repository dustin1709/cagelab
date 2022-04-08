import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Home = () => {
  const [myUser, setMyUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);
  const [list, setList] = useState([]);
  const [itemTypes, setItemTypes] = useState([]);
  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch("http://192.168.192.31:3000/item_types");
      if (!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      setItemTypes(res.item_type);
    };
    const loadTypes2 = async () => {
      const url =
        "http://192.168.192.31:3000/borrower_item/user/unpickedupReservation/" +
        localStorage.getItem("user-id");
      console.log("GET: " + url);
      let result = await fetch(url);
      if (!result.ok) throw Error("Did not receive reservation data");
      let res = await result.json();
      let result2 = await fetch(
        "http://192.168.192.31:3000/reservation_contents/reservation/all/" +
          res.borrower_item[0].reservationID
      );
      let res2 = await result2.json();
      setList(res2.reservation_contents);
    };
    loadTypes2();
    loadTypes();
  }, []);

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
            You are currently on the RIT CageLab website. Students can reserve
            items to borrow for their courses while professors can borrow items
            and create kits for the courses that they teach.
          </p>
          <div style={{ padding: "1%", clear: "both" }}></div>
        </div>

        <div className="HomeLeft">
          <h5 style={{ textAlign: "center" }}>Pickup Pending</h5>
          <div class="viewDetailsButton">
            {list.map((list_item) => (
              <ul style={{ textAlign: "left" }}>
                <li>
                  {itemTypes.map((itemType) =>
                    itemType.typeID === list_item.typeID ? itemType.model : ""
                  )}
                </li>
              </ul>
            ))}
            <Link to="/reservation">
              <Button variant="secondary">View Details</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
