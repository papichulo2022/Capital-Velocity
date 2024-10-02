// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Listing from './Pages/Listing';
import Marketplace from './Pages/Marketplace';
import SellYourBussiness from './Pages/SellYourBussiness';
import About from './Pages/About';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import BusinessDetails from './Pages/BussinesDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/Sell-your-business" element={<SellYourBussiness />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<SignUp />} /> {/* Add route for SignUp */}
        <Route path="/signup" element={<SignUp />} /> {/* Add route for SignUp */}
      </Routes>
    </Router>
  );
}

export default App;