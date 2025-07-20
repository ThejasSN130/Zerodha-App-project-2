import React from "react";
import LeftSection from "../products/LeftSection";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="Media/images/homeHero.png"
          alt="heroimage"
          className="mb-5"
          style={{ height: "20rem", width: "48rem", marginLeft: "10rem" }}
        ></img>
        <h1 className="mt-5">Invest In Everything</h1>
        <p>
          Online Online Platform to invest in stocks,derivations,mutual
          funds,and more
        </p>
        <Link to="/signup">
          <button
            style={{ width: "20%", margin: "0 auto" }}
            className="p-2 btn btn-primary fs-5"
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
