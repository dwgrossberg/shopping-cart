import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Contact from "./pages/contact/contact";
import Cart from "./pages/cart/cart";
import "./styles/App.scss";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetails from "./components/ProductDetails/ProductDetails";

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

  const addZeroes = (num) => {
    return Number(num).toFixed(2);
  };

  // fetch product data from fake store api
  const fetchProductData = async () => {
    try {
      const prodResponse = await fetch("https://fakestoreapi.com/products");
      const prodData = await prodResponse.json();
      prodData.forEach((item) => (item.price = addZeroes(item.price)));
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
        <Header cart={cart} products={products} setCategory={setCategory} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
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
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                products={products}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={<Cart products={products} cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
