import React from "react";
import NavBar from "../navbar/NavBar";
import { Form, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ViewKit = () => {
  const API_URL = "http://192.168.192.31:3000";

  const [myUser, setMyUser] = useState("");
  const [list, setList] = useState([]);
  const [boo, setBoo] = useState(false);
  const { id } = useParams();
  const [itemTypes, setItemTypes] = useState([]);
  const [qty, setQty] = useState("");
  const [typeID, setTypeID] = useState(0);
  const navigate = useNavigate();
  const [refreshKey, setRefreshKey] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  useEffect(() => {
    const loadKitTypes = async () => {
      let result = await fetch(API_URL + "/itemKitContent/kit/type/" + id);

      console.log("Fetching " + API_URL + "/itemKitContent/kit/type/" + id);
      if (!result.ok) throw Error("Unable to get the kit_type list");
      if (result.ok) {
        setBoo(true);
      }
      let res = await result.json();
      console.log(res.itemKitContent);
      setList(res.itemKitContent);
    };
    loadKitTypes();
  }, [refreshKey]);

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + "/item_types");
      if (!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItemTypes(res.item_type);
    };
    loadTypes();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();
    var raw = JSON.stringify({
      kitID: id,
      qty: qty,
      typeID: typeID,
    });
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };
    console.log(raw);
    const response = await fetch(
      API_URL + "/itemKitContent/addItem",
      requestOptions
    );
    if (!response.ok) throw Error("Please reload the app");
    if (response.ok) {
      console.log("New item posted.");
      alert("New item posted successfully.");
    }
    setRefreshKey();
  };

  const ref = React.createRef();

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Kit</h3>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Model
                </Form.Label>
                <Col sm="10">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => setTypeID(e.target.value)}
                  >
                    <option value="0">Select model</option>
                    {itemTypes.map((itemType) =>
                      itemType.model !== "" ? (
                        <option value={itemType.typeID}>
                          {itemType.model}
                        </option>
                      ) : (
                        <></>
                      )
                    )}
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Quantity
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="input"
                    onChange={(e) => setQty(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>

          <div class="submitKit">
            <Link to="">
              <Button variant="primary" onClick={addItem}>
                Add Item to Kit
              </Button>{" "}
            </Link>
          </div>
        </div>

        <div class="kitTable" ref={ref}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {boo ? (
                list.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  {/* <td>test item</td>
                  <td>111</td> */}
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ViewKit;
