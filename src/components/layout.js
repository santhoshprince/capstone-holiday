import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Loader/loader'; // Import the Loader component

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust time based on your need

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />} {/* Show loader when loading */}
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
