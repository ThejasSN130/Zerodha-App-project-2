import React from "react";
import { Link } from "react-router-dom";
function Navabar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="Media/images/logo.svg" style={{ width: "25%" }} />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex"></form>
          <ul class="navbar-nav  mb-2 mb-lg-0" id="nav-options">
            <li class="nav-item">
              <Link
                class="nav-link active text-muted"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active text-muted" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active text-muted" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link active text-muted" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link active text-muted" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navabar;
