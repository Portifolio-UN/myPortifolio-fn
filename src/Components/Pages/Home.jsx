import React from "react";
import About from "./About";
import LandingPage from "./LandingPage";

function Home() {
  return (
    <div className="h-screen pt-14 bg-black">
      <LandingPage />
      <About />
    </div>
  );
}

export default Home;
