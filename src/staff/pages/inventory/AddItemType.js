import React from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItemType = () => {
  const [ name, setName ] = useState('');
  const [ model, setModel ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ cost, setCost ] = useState(0);

  const navigate = useNavigate();
  const API_URL = "http://192.168.192.31:3000/";

  const addItemType = async (e) => {
    e.preventDefault();
    const instance = {name, model, description, cost};
    console.log(JSON.stringify(instance));
    const postCmd = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name, 
        "model": model, 
        "description": description, 
        "cost": parseInt(cost)
      })
    }
    const response = await fetch(API_URL+"item_type/addItem", postCmd);
    if (!response.ok) throw Error('Please reload the app')
    if (response.ok) {
      console.log("New ITEM TYPE posted.");
      alert("New ITEM TYPE posted successfully.");
    }
    navigate('/staff/inventory');
  }

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Add New Item Type</h3>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>

              <Form.Group as={Row} className="mb-3" controlId="TypeName">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" onChange={(e) => setName(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeModel">
                <Form.Label column sm="2">
                  Model
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" onChange={(e) => setModel(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeDesc">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" onChange={(e) => setDescription(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeCost">
                <Form.Label column sm="2">
                  Cost
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" onChange={(e) => setCost(e.target.value)} />
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
              <Button variant="primary" onClick={addItemType}>Submit</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItemType;
