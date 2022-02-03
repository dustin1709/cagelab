import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/userindex/Home';
import Search from './pages/usersearch/Search';
import Reservation from './pages/reservation/Reservation';
import Cart from './pages/shoppingcart/Cart';
import Kit from './pages/kit/Kit';
import SearchResults from './pages/usersearch/SearchResults';

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
      </Routes>
      </main>
    </div>
  );
}

export default App;
