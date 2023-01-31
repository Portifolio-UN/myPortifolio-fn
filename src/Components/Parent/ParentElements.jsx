import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
const ParentElements = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default ParentElements;
