import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NumericInput from "react-numeric-input";
import Button from "react-bootstrap/Button";

const OrderList = () => {
  return (
    <>
      <div className="HomeLeft" id="orderItems">
        <Container>
          <div style={{ fontWeight: "bold" }}>
            <Row>
              <Col xs={{ order: "last" }}></Col>
              <Col xs>Quantity</Col>
              <Col xs={{ order: "first" }}>Item Name</Col>
            </Row>
          </div>
          <hr></hr>

          <Row>
            <Col xs={{ order: "last" }}>
              <Button variant="secondary">Delete</Button>{" "}
            </Col>
            <Col xs>
              <NumericInput
                className="form-control"
                min={0}
                max={10}
                value={1}
              />
            </Col>
            <Col xs={{ order: "first" }}>Iphone 6</Col>
          </Row>

          <Row>
            <Col xs={{ order: "last" }}>
              <Button variant="secondary">Delete</Button>{" "}
            </Col>
            <Col xs>
              <NumericInput
                className="form-control"
                min={0}
                max={10}
                value={1}
              />
            </Col>
            <Col xs={{ order: "first" }}>Keyboard</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OrderList;
