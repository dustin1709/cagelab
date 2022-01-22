import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Layout from './pages/LayOut';
import Home from './pages/userindex/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
