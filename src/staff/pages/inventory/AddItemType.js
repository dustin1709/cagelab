import React from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItemType = () => {
  const [date, setDate] = useState(new Date());
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
                  Type Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeModel">
                <Form.Label column sm="2">
                  Type Model
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="input" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeDesc">
                <Form.Label column sm="2">
                  Type Description
                </Form.Label>
                <Col sm="10">
                    <Form.Control as="textarea" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="TypeCost">
                <Form.Label column sm="2">
                  Type Cost
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

export default AddItemType;
