import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Contact from './pages/contact';
import Bali from './desinationpage/bali';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* International Packages */}
        <Route path="/international/bali" element={<Bali />} />
        {/* <Route path="/international/dubai" element={<Dubai />} /> */}
        {/* Domestic Packages */}
        {/* <Route path="/domestic/goa" element={<Goa />} />
        <Route path="/domestic/andaman" element={<Andaman />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
