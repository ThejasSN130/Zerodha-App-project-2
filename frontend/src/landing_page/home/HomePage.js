import React from "react";
import Awards from "./Awards";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./pricing";
import Education from "./education";
import OpenAccount from "../OpenAccount";
import Navabar from "../Navbar";
import Footer from "../Footer";
function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
