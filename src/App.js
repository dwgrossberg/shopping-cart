import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";
import "./styles/App.scss";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // fetch product data from fake store api
  const fetchProductData = async () => {
    try {
      const prodResponse = await fetch("https://fakestoreapi.com/products");
      const prodData = await prodResponse.json();
      setProducts(prodData);
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
      setCart(cartData);
      console.log(cartData);
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
