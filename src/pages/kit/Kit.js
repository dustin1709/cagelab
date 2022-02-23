import React from "react";
import NavBar from "../navbar/NavBar";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Kit = () => {
  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Kit</h3>
        </div>

        <div class="kitSelection">
          <Form.Select
            aria-label="Default select example"
            style={{ width: "70%", float: "left" }}
          >
            <option value="1">Current Kit</option>
            <option value="2">Past Kit</option>
            <option value="3">Pending Kit</option>
          </Form.Select>
          <Link to="/createkit">
            <Button variant="primary" id="newKit">
              New Kit
            </Button>
          </Link>
        </div>

        <div class="kitTable">
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Kit Name</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                  <Link to="">
                    <Button variant="secondary">View Details</Button>{" "}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                  {" "}
                  <Link to="">
                    <Button variant="secondary">View Details</Button>{" "}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                  {" "}
                  <Link to="">
                    <Button variant="secondary">View Details</Button>{" "}
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Kit;
