import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";

const StaffKit = () => {
  const API_URL = "http://192.168.192.31:3000/kit_types";

  const [myUser, setMyUser] = useState("");
  const [list, setList] = useState([]);
  const [boo, setBoo] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL);
      if (!result.ok) throw Error("Unable to get the kit_type list");
      if (result.ok) {
        setBoo(true);
      }
      let res = await result.json();
      console.log(res.kit_type);
      setList(res.kit_type);
    };
    loadTypes();
  }, []);

  const ref = React.createRef();

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Kit</h3>
        </div>
        <div class="kitSelection">
          {/* <Form.Select
            aria-label="Default select example"
            style={{ width: "70%", float: "left" }}
          >
            <option value="1">Current Kit</option>
            <option value="2">Past Kit</option>
            <option value="3">Pending Kit</option>
          </Form.Select> */}
          <Link to="/staff/kit/staffcreatekit">
            <Button variant="primary" id="newKit">
              New Kit
            </Button>
          </Link>
        </div>

        <div class="kitTable" ref={ref}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th scope="col">Kit ID</th>
                <th scope="col">Name</th>
                <th scope="col">Course ID</th>
                <th scope="col">Quantity</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {boo ? (
                list.map((item) => (
                  <tr>
                    <td>{item.kitID}</td>
                    <td>{item.name}</td>
                    <td>{item.courseID}</td>
                    <td>{item.qty}</td>
                    <td>
                      {" "}
                      <Link
                        className="btn btn-light"
                        role="button"
                        to={`/staff/kit/staffviewkit/${item.kitID}`}
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>2</td>
                  <td>2022-01-10T14:25:00</td>
                  <td>
                    {" "}
                    {/* <Link to="">
                      <Button variant="secondary">View Details</Button>{" "}
                    </Link> */}
                    <Link
                      className="btn btn-light"
                      role="button"
                      to={`/staff/kit/staffviewkit/1`}
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default StaffKit;
