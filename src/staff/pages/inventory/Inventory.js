import React from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const Inventory = ({ itemTypes, search, setSearch }) => {
  const [myUser, setMyUser] = useState("");
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  // const next = async (e) => {
  //   e.preventDefault();
  //   if (state !== 0) {
  //     console.log("Option value is " + state);
  //     if (!localStorage.getItem('typeID')) {
  //       localStorage.setItem('typeID', state);
  //     } else {
  //       localStorage.removeItem('typeID');
  //       localStorage.setItem('typeID', state);
  //     }
  //     navigate('/staff/viewitem');
  //   }
  // };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{ padding: "3%", margin: "2%" }}>
          <h3>Inventory</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "1%",
              paddingTop: "0.5%",
            }}
          >
            <Link
              to="/staff/inventory/addItem"
              style={{ paddingRight: "0.5%" }}
            >
              <Button variant="primary" id="newItem">
                Add New Item
              </Button>
            </Link>

            <Link
              to="/staff/inventory/addItemType"
              style={{ paddingLeft: "0.5%" }}
            >
              <Button variant="dark" id="newItemType">
                Add New Model
              </Button>
            </Link>
          </div>
          <div style={{ paddingTop: "1.5%", width: "30%", clear: "both" }}>
            <h3>Choose Model</h3>
            {/* <form onSubmit={next}>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
              onChange={(e) => setState(e.target.value)}>
                <option value="0">Select item type</option>
                {
                  itemTypes.map((itemType) => (
                    <option value={itemType.typeID}>{itemType.model}</option>
                  ))
                }
              </select>
              <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Next</button>
            </form> */}
          </div>
          <form className="form-outline" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              id="form1"
              type="text"
              placeholder="Search models"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div style={{ clear: "both", padding: "1.5%" }}></div>
          {itemTypes.map((itemType) =>
            itemType.model !== "" ? (
              <>
                <Link
                  className="btn btn-light"
                  role="button"
                  to={`/staff/inventory/viewitem/${itemType.typeID}`}
                >
                  {itemType.name}
                </Link>
                <div style={{ clear: "both", padding: "0.5%" }}></div>
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Inventory;
