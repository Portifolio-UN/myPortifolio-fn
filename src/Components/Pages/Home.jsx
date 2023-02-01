import React from "react";
import About from "./About";
import LandingPage from "./LandingPage";

function Home() {
  return (
    <div className="h-screen pt-14 bg-green-500">
      <LandingPage />
      <About />
    </div>
  );
}

export default Home;
