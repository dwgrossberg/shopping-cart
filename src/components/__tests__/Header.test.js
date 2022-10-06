import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../Header/Header";
import App from "../../App";

describe("Header component", () => {
  afterEach(cleanup);

  Object.defineProperty(window, "scrollTo", {
    value: () => {},
    writable: true,
  });

  it("snapshot test", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("renders correct nav links", () => {
    render(<App />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByAltText(/shopping-cart/i)).toBeInTheDocument();
  });

  it("renders all route navigation links correctly", async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByText(/anything you want store/i)).toBeInTheDocument();
    await user.click(screen.getByText(/products/i));
    expect(screen.getByText(/filter shop items by/i)).toBeInTheDocument();
    await user.click(screen.getByText(/contact/i));
    expect(screen.getByRole("heading").textContent).toMatch(/contact/i);
    await user.click(screen.getByAltText(/shopping-cart/i));
    expect(screen.getByText(/your shopping cart/i)).toBeInTheDocument();
  });
});
