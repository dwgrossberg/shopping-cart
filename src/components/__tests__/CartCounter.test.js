import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CartCounter from "../CartCounter/CartCounter";

describe("Cart Counter component", () => {
  afterEach(cleanup);
  const renderer = new ShallowRenderer();
  const user = userEvent.setup();

  it("snapshot test", () => {
    renderer.render(<CartCounter />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("correctly calls item increment counter", async () => {
    const onClick = jest.fn();
    render(
      <div className="price-quant">
        <div className="quant">
          <button className="decrement" onClick={onClick}>
            -
          </button>
          <div className="quant-number">{1}</div>
          <button className="increment" onClick={onClick}>
            +
          </button>
        </div>
        <div className="price">${100}</div>
      </div>
    );
    await user.click(screen.getByText(/-/i));
    expect(onClick).toHaveBeenCalledTimes(1);
    await user.click(screen.getByText(/\+/i));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
