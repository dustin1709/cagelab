import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";

const SearchResults = ({ itemTypes, search, setSearch }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  // const next = async (e) => {
  //   e.preventDefault();
  //   if (state !== 0) {
  //     console.log("Option value is " + state);
  //     if (!localStorage.getItem('user-typeID')) {
  //       localStorage.setItem('user-typeID', state);
  //     } else {
  //       localStorage.removeItem('user-typeID');
  //       localStorage.setItem('user-typeID', state);
  //     }
  //     navigate('/search/viewitem');
  //   }
  // };

  return (
    <>
      <NavBar />
      <div className="mainContainerRight">
        <div style={{ padding: "3%", margin: "2%" }}>
          <h3>Choose a model</h3>
          {/* <form onSubmit={next}>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
              onChange={(e) => setState(e.target.value)}>
                <option value="0">Select Model</option>
                {
                  itemTypes.map((itemType) => (
                    <option value={itemType.typeID}>{itemType.model}</option>
                  ))
                }
              </select>
              <button type="submit" id="login-button" className="btn btn-secondary btn-lg btn-block">Next</button>
            </form> */}

          <form className="form-outline" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control"
              id="form1"
              type="text"
              placeholder="Search models"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div style={{ clear: "both", padding: "1.5%" }}></div>
          {itemTypes.map((itemType) =>
            itemType.model !== "" ? (
              <>
                <Link
                  className="btn btn-info"
                  role="button"
                  to={`/search/viewitem/${itemType.typeID}`}
                >
                  {itemType.name}
                </Link>
                <div style={{ clear: "both", padding: "1%" }}></div>
              </>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
