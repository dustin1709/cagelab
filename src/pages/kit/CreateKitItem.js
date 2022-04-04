import React, { useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

const CreateKitItem = () => {
  const navigate = useNavigate();
  const API_URL = "http://192.168.192.31:3000/";
  const [typeID, setTypeID] = useState(0);
  const [qty, setQty] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + "item_types");
      if (!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItemTypes(res.item_type);
    };
    loadTypes();
  }, []);

  const addKitItem = async (e) => {
    e.preventDefault();
    const instance = { id, qty, typeID };
    console.log(JSON.stringify(instance));
    const postCmd = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instance),
    };
    const response = await fetch(API_URL + "/itemKItContent/addItem", postCmd);
    if (!response.ok) throw Error("Please reload the app");
    if (response.ok) {
      console.log("New item posted.");
      alert("New item posted successfully.");
    }
    navigate(API_URL + "/" + id);
  };

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Add New Item</h3>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Item Type
                </Form.Label>
                <Col sm="10">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => setTypeID(e.target.value)}
                  >
                    <option value="0">Select item type</option>
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

              <Form.Group as={Row} className="mb-3" controlId="itemsNeeded">
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

          <div class="cancelKit">
            <Link to={API_URL + "/" + id}>
              <Button variant="secondary">Cancel</Button>{" "}
            </Link>
          </div>
          <div class="submitKit">
            <Link to="">
              <Button variant="primary" onClick={addKitItem}>
                Submit
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateKitItem;
