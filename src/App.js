import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/userindex/Home";
import Search from "./pages/usersearch/Search";
import Reservation from "./pages/reservation/Reservation";
import Cart from "./pages/shoppingcart/Cart";
import Checkout from "./pages/shoppingcart/Checkout";
import OrderConfirmation from "./pages/shoppingcart/OrderConfirmation";
import Kit from "./pages/kit/Kit";
import CreateKit from "./pages/kit/CreateKit";
import SearchResults from "./pages/usersearch/SearchResults";
import StaffLogin from "./staff/pages/login/StaffLogin";
import StaffDashboard from "./staff/pages/dashboard/StaffDashboard";
import StaffSearch from "./staff/pages/search/StaffSearch";
import StaffCheckIn from "./staff/pages/checkin/StaffCheckIn";
import StaffCart from "./staff/pages/cart/StaffCart";
import StaffReservation from "./staff/pages/reservation/StaffReservation";
import StaffKit from "./staff/pages/kit/StaffKit";
import Inventory from "./staff/pages/inventory/Inventory";
import SearchByID from "./staff/pages/search/SearchByID";
import StaffReport from "./staff/pages/report/StaffReport";
import AddItem from "./staff/pages/inventory/AddItem";
import AddItemType from "./staff/pages/inventory/AddItemType";
import ViewItem from "./staff/pages/inventory/ViewItem";

function App() {
  return (
    <div className="App">
      <main className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/results" element={<SearchResults />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/createkit" element={<CreateKit />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/OrderConfirmation" element={<OrderConfirmation />} />

          {/* Staff section */}
          <Route path="/staff" element={<StaffLogin />} />
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
          <Route path="/staff/search" element={<StaffSearch />} />
          <Route path="/staff/checkin" element={<StaffCheckIn />} />
          <Route path="/staff/cart" element={<StaffCart />} />
          <Route path="/staff/reservation" element={<StaffReservation />} />
          <Route path="/staff/kit" element={<StaffKit />} />
          <Route path="/staff/inventory" element={<Inventory />} />
          <Route path="/staff/searchbyid" element={<SearchByID />} />
          <Route path="/staff/report" element={<StaffReport />} />
          <Route path="/staff/addItem" element={<AddItem />} />
          <Route path="/staff/addItemType" element={<AddItemType />} />
          <Route path="/staff/viewitem" element={<ViewItem />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
