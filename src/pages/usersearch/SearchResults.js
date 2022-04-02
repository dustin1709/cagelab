import React, { useState, useEffect } from 'react';
import NavBar from '../navbar/NavBar';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';

const SearchResults = () => {
  const API_URL = "http://192.168.192.31:3000/item_types";
  const navigate = useNavigate();
  const [ state, setState ] = useState(0);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [ itemTypes, setItemTypes ] = useState([]);
  useEffect(() => {
    const loadTypes = async () => {
      let result = await fetch(API_URL);
      if(!result.ok) throw Error("Unable to get item types");
      let res = await result.json();
      console.log(res.item_type);
      setItemTypes(res.item_type);
      //localStorage.setItem('user-items-list', JSON.stringify(res.itemtypes))
    }
    loadTypes();
  }, [])

  useEffect(() => {
    const filteredResults = itemTypes.filter((itemType) =>
      ((itemType.body).toLowerCase()).includes(itemType.toLowerCase())
      || ((itemType.title).toLowerCase()).includes(itemType.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [itemTypes, search])

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
        <div className='mainContainerRight'>
          <div style={{padding: '3%', margin: '2%'}}>
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
                    className='form-control'
                    id="form1"
                    type="text"
                    placeholder="Search items"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            {
              itemTypes.map((itemType) => (
                <>
                  <Link className="btn btn-info" role="button" to={`/search/viewitem/${itemType.typeID}`}>{itemType.model}</Link>
                  <div style={{clear: 'both', padding: '1%'}}></div>
                </>
              ))
            }
          </div>
        </div>
    </>
  );
}

export default SearchResults;