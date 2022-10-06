import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AddToCart from "./AddToCart";

describe("Add to Cart component", () => {
  afterEach(cleanup);
  const renderer = new ShallowRenderer();
  const user = userEvent.setup();

  const cart = [
    { productId: 1, quantity: 2 },
    { productId: 9, quantity: 1 },
  ];

  it("snapshot test", () => {
    renderer.render(<AddToCart cart={cart} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("correctly calls item increment counter", async () => {
    const onClick = jest.fn();
    render(
      <div className="quant">
        <button className="decrement" onClick={onClick}>
          -
        </button>
        <div className="quant-number" data-testid="quant">
          {1}
        </div>
        <button className="increment" onClick={onClick}>
          +
        </button>
      </div>
    );
    await user.click(screen.getByText(/-/i));
    expect(onClick).toHaveBeenCalledTimes(1);
    await user.click(screen.getByText(/\+/i));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("correctly calls add to cart function", async () => {
    const onClick = jest.fn();
    render(
      <button className="add-to-cart" onClick={onClick}>
        Add to Cart
      </button>
    );
    await user.click(screen.getByText(/Add to Cart/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
