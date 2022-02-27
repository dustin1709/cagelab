import React from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddItem = () => {
  const [date, setDate] = useState(new Date());
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
                        <option value="NA">Type1</option>
                        <option value="NA">Type2</option>
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
