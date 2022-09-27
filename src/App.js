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

  // fetch product data from fake store api
  const fetchShopData = async () => {
    try {
      const shopResponse = await fetch("https://fakestoreapi.com/products");
      const shopData = await shopResponse.json();
      setProducts(shopData);
      console.log(shopData);
      return shopData;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchShopData();
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
