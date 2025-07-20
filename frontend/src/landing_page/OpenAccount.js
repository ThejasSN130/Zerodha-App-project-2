import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p>
          Modern Platform and apps, 0 investments,and flat 20 rupees Intraday
          and F&O traders.
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

export default OpenAccount;
