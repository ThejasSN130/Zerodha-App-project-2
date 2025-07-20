import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import OpenAccount from "../landing_page/OpenAccount";

describe("OpenAccount Component", () => {
  test("renders Signupbutton", () => {
    render(
      <BrowserRouter>
        <OpenAccount />
      </BrowserRouter>
    );

    const signupbtn = screen.getByRole("button", { name: /Signup Now/i });
    expect(signupbtn).toBeInTheDocument();
    expect(signupbtn).toHaveClass("btn");
  });
});
