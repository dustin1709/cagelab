import React from "react";
import NavBar from "../navbar/NavBar";
import { Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CreateKit = () => {
  // const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");

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
    navigate("/kit");
  };

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Create New Kit</h3>
          <p>Please enter the following information to create a new kit</p>
        </div>

        <div class="newKitInfo">
          <div>
            <Form>
              {/* <Form.Group as={Row} className="mb-3" controlId="courseName">
                <Form.Label column sm="2">
                  Course Number
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="input" />
                </Col>
              </Form.Group> */}

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
              {/* 
              <Form.Group as={Row} className="mb-3" controlId="kitName">
                <Form.Label column sm="2">
                  Kit Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="input" />
                </Col>
              </Form.Group> */}
              {/* 
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
              </Form.Group> */}

              {/* <Form.Group as={Row} className="mb-3" controlId="itemsNeeded">
                <Form.Label column sm="2">
                  Items Needed
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" />
                </Col>
              </Form.Group> */}
              {/* 
              <Form.Group as={Row} className="mb-3" controlId="specialNote">
                <Form.Label column sm="2">
                  Speacial Note
                </Form.Label>
                <Col sm="10">
                  <Form.Control as="textarea" />
                </Col>
              </Form.Group> */}
            </Form>
          </div>

          <div class="cancelKit">
            <Link to={"/kit"}>
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

export default CreateKit;
