import { NavLink } from "react-router-dom";
import logo from './logo.png';

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white MyNavBar" style={{backgroundColor: '#F29441'}}>
            <img src={logo} alt="Logo" width="55%" />
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <NavLink to="/dashboard" activeclassname="active" className="nav-link text-white">
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" activeclassname="active" className="nav-link text-white">
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reservation" activeclassname="active" className="nav-link text-white">
                        Reservation
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" activeclassname="active" className="nav-link text-white">
                        Shopping Cart
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kit" activeclassname="active" className="nav-link text-white">
                        Kit
                    </NavLink>
                </li>

                <li class="mb-1">
                    <button style={{position: 'absolute', bottom: '0', marginBottom: '3%', marginLeft: '5.5%'}} 
                    type="button" 
                    className="btn btn-light">
                        Log out
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
