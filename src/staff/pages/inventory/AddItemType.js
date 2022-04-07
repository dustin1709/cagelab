import React from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItemType = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);

  const navigate = useNavigate();

  const addItemType = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      name: name,
      model: model,
      description: description,
      cost: parseInt(cost),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(raw);
    fetch("http://192.168.192.31:3000/item_type/addItem", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("New model posted successfully.");
    navigate("/staff/inventory");
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Add New Model</h3>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="TypeName">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="input"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeModel">
                <Form.Label column sm="2">
                  Model
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="input"
                    onChange={(e) => setModel(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeDesc">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="input"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeCost">
                <Form.Label column sm="2">
                  Price
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="input"
                    onChange={(e) => setCost(e.target.value)}
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>

          <div class="cancelKit">
            <Link to={"/staff/inventory"}>
              <Button variant="secondary">Cancel</Button>{" "}
            </Link>
          </div>
          <div class="submitKit">
            <Link to="">
              <Button variant="primary" onClick={addItemType}>
                Submit
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemType;
