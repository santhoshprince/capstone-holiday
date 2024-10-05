import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutus";
import Contact from "./pages/contact";
import Bali from "./desinationpage/bali";
import ScrollToTop from "./components/ScrollToTop";
import Maldives from "./desinationpage/maldives";
import Dubai from "./desinationpage/dubai"
import Thailand from "./desinationpage/thailand"
import Mauritius from "./desinationpage/mauritius"
import Turkey from "./desinationpage/turkey"
import Singapore from "./desinationpage/singapore"
import Vietnam from "./desinationpage/vietnam"

import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import BaliDetails from "./detailspage/Balidetails";
import Maldivesdetails from "./detailspage/maldivesdetails"; // Import your details component
import Dubaidetails from "./detailspage/dubaidetails"
import Thailanddetails from "./detailspage/thailanddetails"
import Mauritiusdetails from "./detailspage/mauritiusdetails"
import Turkeydetails from "./detailspage/turkeydetails"
import Singaporedetails from "./detailspage/singaporedetails"
import Vietnamdetails from "./detailspage/vietnamdetails"
import Layout from "./components/layout";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "typeface-poppins";

function App() {
  return (
    <Router>
      <Layout>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* International Packages */}
          <Route path="/tour-destination/bali-tour" element={<Bali />} />
          <Route
            path="/tour/bali-tour-packages-from-chennai/:id"
            element={<BaliDetails />}
          />
           <Route
            path="/tour/bali-tour-places/:id"
            element={<BaliDetails />}
          />
          <Route path="/tour-destination/maldives-tour" element={<Maldives />} />
          <Route
            path="/tour/maldivestour-package-from-chennai/:id"
            element={<Maldivesdetails />}
          />
           <Route path="/tour-destination/dubai-tour" element={<Dubai />} />
          <Route
            path="/tour/dubai-tour-packages-from-chennai/:id"
            element={<Dubaidetails />}
          />
             <Route path="/tour-destination/thailand-tour" element={<Thailand />} />
          <Route
            path="/tour/thailand-tour-package-from-chennai/:id"
            element={<Thailanddetails />}
          />
            <Route path="/tour-destination/mauritius-tour" element={<Mauritius />} />
          <Route
            path="/tour/mauritius-tour-package-from-chennai/:id"
            element={<Mauritiusdetails />}
          />
           <Route path="/tour-destination/turkey-tour-package" element={<Turkey />} />
          <Route
            path="/tour/turkey-tour-packages-from-india/:id"
            element={<Turkeydetails />}
          />
              <Route path="/tour-destination/singapore-malaysia-tour" element={<Singapore />} />
          <Route
            path="/tour/singapore-and-malaysia-tour-packages/:id"
            element={<Singaporedetails />}
          />
           <Route path="/tour-destination/vietnam-tour-package" element={<Vietnam />} />
          <Route
            path="/tour/vietnam-cambodia-tour-package/:id"
            element={<Vietnamdetails />}
          />
          {/* Add this route for details */}

          {/* Domestic Packages */}
          {/* <Route path="/domestic/goa" element={<Goa />} />
        <Route path="/domestic/andaman" element={<Andaman />} /> */}
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
