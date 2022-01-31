import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import DatePicker from "react-datepicker";
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const navigate = useNavigate();
  var isWeekday = (date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }
  const [selectDate, setSelectedDate] = useState(new Date());
  const submitDate = async (e) => {
    navigate('/search/results');
  }

  return (
    <>
        <NavBar />
        <div className='mainContainerRight'>
          <div style={{padding: '3%', margin: '2%'}}>
            <h3>Pick a date</h3>
            <div style={{padding: '1.5%', clear: 'both'}}></div>
            <form onSubmit={submitDate}>
              <DatePicker selected={selectDate} 
                onChange={(date) => setSelectedDate(date)}
                dateFormat='MM/dd/yyyy'
                filterDate={isWeekday}
                showYearDropdown
                scrollableYearDropdown
              />
              <div style={{padding: '1.5%', clear: 'both'}}></div>
              <button className="btn btn-light">Next</button>
            </form>
          </div>
        </div>
    </>
  );
}

export default Search;