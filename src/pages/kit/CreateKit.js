import React from "react";
import NavBar from "../navbar/NavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CreateKit = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Create New Kit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="courseName">
                <Form.Label column sm="2">
                  Course Number
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="input" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Kit Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="input" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="requestDate">
                <Form.Label column sm="2">
                  Request Date
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="date"
                    name="duedate"
                    placeholder="Due date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="itemsNeeded">
                <Form.Label column sm="2">
                  Items Needed
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="specialNote">
                <Form.Label column sm="2">
                  Speacial Note
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" />
                </Col>
              </Form.Group>
            </Form>
          </div>

          <div class="cancelKit">
            <Link to={"/kit"}>
              <Button variant="secondary">Cancel</Button>{" "}
            </Link>
          </div>
          <div class="submitKit">
            <Link to="">
              <Button variant="secondary">Submit</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateKit;
