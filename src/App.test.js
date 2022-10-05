import "@testing-library/jest-dom";
import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  Object.defineProperty(window, "scrollTo", {
    value: () => {},
    writable: true,
  });
  it("snapshot test", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /anything you want store/i
    );
  });
});
