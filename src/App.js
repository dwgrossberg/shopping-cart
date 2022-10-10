import React, { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
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
    <div className="App custom-shape-divider-bottom-1665083357">
      <div className="custom-shape-divider-bottom-1665083497">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <HashRouter>
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
          <Route
            path="/cart"
            element={<Cart products={products} cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
