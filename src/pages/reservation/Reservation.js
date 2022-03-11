import React from 'react';
import NavBar from '../navbar/NavBar';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Reservation = () => {
  const [borrower, setBorrower] = useState('');
  const [itemName, setItemName] = useState('');
  const [ orderID, setOrderID ] = useState('');

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setBorrower(localStorage.getItem("user"));
    }
    if (localStorage.getItem("user-item-checked")) {
      setItemName(JSON.parse(localStorage.getItem("user-item-checked")).name);
    }
    if (localStorage.getItem("orderID")) {
      setOrderID(localStorage.getItem("orderID"));
    }
  }, [])
  
  useEffect(() => {
    var today = new Date();
    setToday(formatDate(today));
    var tomorrow = new Date(new Date(today).getTime() + 60 * 60 * 24 * 1000);
    setTomorrow(formatDate(tomorrow));
  }, [])

  function formatDate(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    date = mm + '/' + dd + '/' + yyyy;
    return date;
  }

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
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Borrow Date</th>
                  <th scope="col">Return By</th>
                  <th scope="col">Picked up (Yes/No)</th>
                </tr>
              </thead>
              <tbody>
                {
                  localStorage.getItem("user-item-checked") ?
                  <tr>
                    <td>{orderID+borrower}</td>
                    <td>{itemName}</td>
                    <td>1</td>
                    <td>{today}</td>
                    <td>{tomorrow}</td>
                    <td>No</td>
                  </tr> :
                  <tr></tr>
                }
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
}

export default Reservation;