import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="text-center">
          <h1> The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="Media/images/smallcaseLogo.png" alt="image" />
          <p className="text-small text-muted">Thematic Investment platforms</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="Media/images/streakLogo.png"
            style={{ height: "5rem", width: "13rem" }}
            alt="image"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images/sensibullLogo.svg" alt="image" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="Media\images\zerodhaFundhouse.png"
            style={{ height: "5rem", width: "13rem" }}
            alt="image"
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media\images\goldenpiLogo.png" alt="image" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images/smallcaseLogo.png" alt="image" />
          <p className="Media\images\dittoLogo.png">Insurance</p>
        </div>
        <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5 "
            style={{
              width: "20%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
