import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { screen, render, cleanup, getByTestId } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Products from "../../pages/products/products";
import FilterBar from "./FilterBar";

describe("Filter Bar Component", () => {
  afterEach(cleanup);
  const renderer = new ShallowRenderer();

  // sample products from each category
  const products = [
    {
      category: "women's clothing",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      id: 19,
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      price: "7.95",
      rating: { rate: 4.5, count: 146 },
      title: "Opna Women's Short Sleeve Moisture",
    },
    {
      category: "jewelery",
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      id: 7,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      price: "9.99",
      rating: { rate: 3, count: 400 },
      title: "White Gold Plated Princess",
    },
    {
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      id: 2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: "22.30",
      rating: { rate: 4.1, count: 259 },
      title: "Mens Casual Premium Slim Fit T-Shirts ",
    },
    {
      category: "electronics",
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      id: 14,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      price: "999.99",
      rating: { rate: 2.2, count: 140 },
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    },
  ];

  it("snapshot test", () => {
    renderer.render(<FilterBar category={products} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it("correctly filters by category", async () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <Routes>
          <Route
            path={"/products"}
            element={<Products products={products} category={products} />}
          ></Route>
        </Routes>
      </MemoryRouter>
    );
    // check that filter bar is rendering correctly
    expect(screen.getByText(/filter shop items by/i)).toBeInTheDocument();
    // check that all products are rendered correctly
    expect(screen.getAllByText(/Add to Cart/i)).toHaveLength(4);
    // test filter bar
    const user = userEvent.setup();
    // await user.click(screen.getByDisplayValue(/all/i));
    await user.selectOptions(screen.getByTestId("filter-options"), ["jewelry"]);
    expect(screen.getByTestId("jewelry").selected).toBe(true);
    // mock the onClick function
    const clicker = jest.fn();
    FilterBar.handleClick = clicker;

    await user.click(screen.getByDisplayValue(/jewelry/i));
    expect(clicker).toHaveBeenCalledTimes(1);
  });
});
