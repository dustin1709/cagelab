import React, { useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItem = () => {
  const navigate = useNavigate();
  const API_URL = "http://192.168.192.31:3000/";
  const [ itemTypes, setItemTypes ] = useState([]);
  const [ itemID, setItemID ] = useState('');
  const [ typeID, setTypeID ] = useState(0);
  const [ conditionID, setConditionID ] = useState(0);

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL+"item_types");
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItemTypes(res.item_type);
    }
    loadTypes();
  }, []) 

  const addItem = async (e) => {
    e.preventDefault();
    const instance = {itemID, typeID, conditionID};
    console.log(JSON.stringify(instance));
    const postCmd = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(instance)
    }
    const response = await fetch(API_URL+"item_instance/addItem", postCmd);
    if (!response.ok) throw Error('Please reload the app')
    if (response.ok) {
      console.log("New item posted.");
      alert("New item posted successfully.");
    }
    navigate('/staff/inventory');
  }

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Add New Item</h3>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>

              <Form.Group as={Row} className="mb-3" controlId="itemsNeeded">
                <Form.Label column sm="2">
                  ID (BarCode)
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" onChange={(e) => setItemID(e.target.value)} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Item Type
                </Form.Label>
                <Col sm="10">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                  onChange={(e) => setTypeID(e.target.value)}>
                    <option value="0">Select item type</option>
                    {
                      itemTypes.map((itemType) => (
                        <option value={itemType.typeID}>{itemType.model}</option>
                      ))
                    }
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="kitName">
              <Form.Label column sm="2">
                  Condition
                </Form.Label>
                <Col sm="10">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
                  onChange={(e) => setConditionID(e.target.value)}>
                    <option value="0">Select condition</option>
                    <option value="1">New</option>
                    <option value="2">Pre-Owned</option>
                  </select>
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
              <Button variant="primary" onClick={addItem}>Submit</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
