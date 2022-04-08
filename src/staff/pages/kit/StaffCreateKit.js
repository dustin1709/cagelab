import React from "react";
import StaffNavBar from "../../components/StaffNavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const StaffCreateKit = () => {
  const [name, setName] = useState("");
  const [courseID, setCourseID] = useState("");
  const [qty, setQty] = useState("");

  const navigate = useNavigate();

  const addKitType = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      name: name,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(raw);
    fetch("http://192.168.192.31:3000/kit_type/addKit", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    alert("New kit posted successfully.");
    navigate("/staff/kit");
  };

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Create New Kit</h3>
          <p>Please enter the following information to create a new kit</p>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="kitName">
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

              <Form.Group as={Row} className="mb-3" controlId="Courseid">
                <Form.Label column sm="2">
                  Course ID
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="input"
                    onChange={(e) => setCourseID(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="quan">
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
            <Link to={"/staff/kit"}>
              <Button variant="secondary">Cancel</Button>{" "}
            </Link>
          </div>
          <div class="submitKit">
            <Link to="">
              <Button variant="secondary" onClick={addKitType}>
                Submit
              </Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffCreateKit;
