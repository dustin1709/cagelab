import React, { useState } from 'react';
import NavBar from '../navbar/NavBar';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';

const SearchResults = () => {
  const navigate = useNavigate();

  return (
    <>
        <NavBar />
        <div className='mainContainerRight'>
          <div style={{padding: '3%', margin: '2%'}}>
            <h3>Select a type of item</h3>
          </div>
        </div>
    </>
  );
}

export default SearchResults;