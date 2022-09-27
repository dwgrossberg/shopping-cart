import React from "react";
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
