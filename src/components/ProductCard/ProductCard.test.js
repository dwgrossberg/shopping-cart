import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductDetails from "../ProductDetails/ProductDetails";

describe("Product Card component", () => {
  afterEach(cleanup);

  // sample product
  const product = {
    category: "men's clothing",
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    id: 4,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: "15.99",
    rating: { rate: 2.1, count: 430 },
    title: "Mens Casual Slim Fit",
  };

  it("snapshot test", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ProductCard product={product} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("forwards users to correct Product Details component", async () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <Routes>
          <Route
            path={"/products"}
            element={<ProductCard product={product} />}
          ></Route>
          <Route
            path="/products/:id"
            element={<ProductDetails products={[product]} />}
          ></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(
      screen.queryByText(/The color could be slightly different/i)
    ).not.toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByAltText("product-item"));
    expect(
      screen.getByText(/The color could be slightly different/i)
    ).toBeInTheDocument();
  });
});
