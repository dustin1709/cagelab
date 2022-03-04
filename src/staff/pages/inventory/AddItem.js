import React, { useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItem = () => {
  const [date, setDate] = useState(new Date());

  const API_URL = "http://192.168.192.31:3000/";
  const [ itemTypes, setItemTypes ] = useState([]);
  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL+"itemtypes");
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.itemtypes);
      setItemTypes(res.itemtypes);
    }
    loadTypes();
  }, []) 
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

              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Item Type
                </Form.Label>
                <Col sm="10">
                  <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    {
                      itemTypes.map((itemType) => (
                        <option value={itemType.typeID}>{itemType.model}</option>
                      ))
                    }
                  </select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="itemsNeeded">
                <Form.Label column sm="2">
                  Condition
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" />
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
              <Button variant="primary">Submit</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
