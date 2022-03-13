import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import StaffNavBar from "../../components/StaffNavBar";
import ReactToPdf from "react-to-pdf";

const StaffReport = () => {

  const API_URL = "http://192.168.192.31:3000/borrower_item/none/checkouts";

  const [ myUser, setMyUser ] = useState('');
  const [ list, setList ] = useState([]);
  const [ boo, setBoo ] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
        setMyUser(localStorage.getItem("user"));
    }
  }, [])

  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL);
      if(!result.ok) throw Error("Unable to get the borrower-item list");
      if(result.ok) {
        setBoo(true);
      }
      let res = await result.json();
      console.log(res.borrower_item);
      setList(res.borrower_item);
    }
    loadTypes();
  }, [])

  const ref = React.createRef();

  return (
    <>
      <StaffNavBar />
      <div className="mainContainerRight">
        <div style={{ padding: "50px" }}>
          <h3>View Report</h3>
          <div style={{ padding: "18px", clear: "both" }}></div>
          <div>
              <ReactToPdf targetRef={ref} filename="report.pdf">
                  {({toPdf}) => (
                      <button onClick={toPdf}>Generate pdf</button>
                  )}
              </ReactToPdf>
              <div style={{ padding: "10px", clear: "both" }}></div>
              <div ref={ref}>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">reservationID</th>
                      <th scope="col">Checkout</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      boo ? list.map((item) => 
                        <tr>
                          <td>{item.reservationID}</td>
                          <td>{item.checkout}</td>
                        </tr>
                      ) : 
                      <tr>
                        <td>2</td>
                        <td>2022-01-10T14:25:00</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffReport;
