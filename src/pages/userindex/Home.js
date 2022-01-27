import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

const Home = () => {
  return (
    <>
        <NavBar />
        <div className='mainContainerRight'>
          <div style={{padding: '3%', backgroundColor: '#cfd0d1', margin: '2%'}}>
            
            <h3>Welcome, Unknown</h3>
            
            <div style={{padding: '1.5%', clear: 'both'}}></div>
            <p>
              You are currently on RIT CageLab site. 
                Students can reserve items to borrow for their courses while professors can borrow, 
                but also create a kit for the courses that they teach.
            </p>
            <div style={{padding: '1%', clear: 'both'}}></div>

          </div>

          <div style={{margin: '2%'}}>
            <div className='HomeLeft' style={{backgroundColor: '#e6e6e6', width: '49%', padding: '1%'}}>
              <h5 style={{textAlign: 'center'}}>My Reservation</h5>
              <Link style={{
                textDecoration: 'none', color: 'white', background: '#8a8a8a',
                padding: '2%', borderRadius: '5px', margin: '3%', float: 'right'
              }} to="/reservation">View Details</Link>
            </div>

            <div className='HomeRight' style={{backgroundColor: '#e6e6e6', width: '49%', padding: '1%'}}>
              <h5 style={{textAlign: 'center'}}>My Shopping Cart</h5>
              <Link style={{
                textDecoration: 'none', color: 'white', background: '#8a8a8a',
                padding: '2%', borderRadius: '5px', margin: '3%', float: 'right'
              }} to="/cart">View Details</Link>
            </div>
          </div>

        </div>
    </>
  );
}

export default Home;
