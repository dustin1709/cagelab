import React from "react";
import NavBar from "../navbar/NavBar";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewKit = () => {
  const API_URL = "http://192.168.192.31:3000/itemKitContent/kit/type/";

  const [myUser, setMyUser] = useState("");
  const [list, setList] = useState([]);
  const [boo, setBoo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setMyUser(localStorage.getItem("user"));
    }
  }, []);

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL + id);

      console.log("Fetching " + API_URL + "/" + id);
      if (!result.ok) throw Error("Unable to get the kit_type list");
      if (result.ok) {
        setBoo(true);
      }
      let res = await result.json();
      console.log(res.itemKitContent);
      setList(res.itemKitContent);
    };
    loadTypes();
  }, []);

  const ref = React.createRef();

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div className="pageTitle">
          <h3>Kit</h3>
        </div>

        <div class="kitSelection">
          <Link to="/createKitItem">
            <Button variant="primary" id="newItem">
              Add Item
            </Button>
          </Link>
        </div>

        <div class="kitTable" ref={ref}>
          <Table responsive="sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {boo ? (
                list.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>test item</td>
                  <td>111</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ViewKit;
