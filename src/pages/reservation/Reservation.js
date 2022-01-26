import React from 'react';
import NavBar from '../navbar/NavBar';

const Reservation = () => {
  return (
    <>
        <NavBar />
        <div className='mainContainerRight'>
          <div style={{padding: '3%', backgroundColor: '#cfd0d1', margin: '2%'}}>
            <h3>My Reservation</h3>
            <div style={{padding: '0.5%', clear: 'both'}}></div>
            <p>Your reservation list</p>
            <div style={{padding: '0.75%', clear: 'both'}}></div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default Reservation;