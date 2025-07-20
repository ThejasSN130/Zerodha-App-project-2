import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heroimg = screen.getByAltText("heroimage");
    expect(heroimg).toBeInTheDocument();
    expect(heroimg).toHaveAttribute("src", "Media/images/homeHero.png");
  });
});

describe("Hero Component", () => {
  test("renders hero button", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );
    const herobtn = screen.getByRole("button", { name: /Signup Now/i });
    expect(herobtn).toBeInTheDocument();
    expect(herobtn).toHaveClass("p-2");
  });
});
