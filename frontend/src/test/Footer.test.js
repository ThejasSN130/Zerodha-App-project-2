import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Footer from "../landing_page/Footer";

describe("Footer Component", () => {
  test("Footer Signupbutton", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const Logoimg = screen.getByAltText("logo image");
    expect(Logoimg).toBeInTheDocument();
    expect(Logoimg).toHaveAttribute("src", "media/images/logo.svg");
  });
});

describe("Footer Component", () => {
  test("Footer copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const footerpara = screen.getByTestId("description");
    expect(footerpara).toBeInTheDocument();
  });
});
