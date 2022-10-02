import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Contact from "./pages/contact/contact";
import "./styles/App.scss";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState([]);

  // shuffle array to randomize product display on each visit
  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // fetch product data from fake store api
  const fetchProductData = async () => {
    try {
      const prodResponse = await fetch("https://fakestoreapi.com/products");
      const prodData = await prodResponse.json();
      const shuffledData = shuffle(prodData);
      setProducts(shuffledData);
      setCategory(shuffledData);
      console.log(prodData);
      return prodData;
    } catch (err) {
      console.log(err);
    }
  };

  // fetch cart data from fake store api
  const fetchCartData = async () => {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    try {
      const cartResponse = await fetch(
        `https://fakestoreapi.com/carts/${randomNum}`
      );
      const cartData = await cartResponse.json();
      setCart(cartData.products);
      console.log(cartData.products);
      return cartData;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductData();
    fetchCartData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header cart={cart} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                products={products}
                setProducts={setProducts}
                category={category}
                setCategory={setCategory}
                cart={cart}
                setCart={setCart}
                shuffle={shuffle}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
