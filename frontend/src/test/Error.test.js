import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NotFound from "../landing_page/NotFound";

describe("Error", () => {
  test("Error Message", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const errorMsg = screen.getByTestId("Error-Msg");
    expect(errorMsg).toBeInTheDocument();
  });
});
