import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <h2>This is the Landing Page</h2>
      <button className="bg-cyan-300 rounded p-2 hover:bg-[#f7a006]">
        <Link to={"/login"}>Sign In</Link>
      </button>
    </div>
  );
};

export default LandingPage;
