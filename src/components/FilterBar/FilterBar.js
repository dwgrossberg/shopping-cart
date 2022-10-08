import { useState } from "react";
import "./FilterBar.scss";

const FilterBar = (props) => {
  const { products, category, setCategory } = props;
  const [value, setValue] = useState("all");

  const handleClick = (e) => {
    console.log(e.target.nodeName, e.target.value);
    setValue(e.target.value);
    if (e.target.nodeName === "SPAN" || e.target.nodeName === "DIV") {
      if (e.target.id === "clear") {
        document.getElementById("filter-rating").style.color = "";
        document.getElementById("filter-price").style.color = "";
        document.getElementById("price-span").textContent = "▲";
        document.getElementById("rating-span").textContent = "▲";
        document.getElementById("filter-category").value = "all";
        const productsCopy = [...products];
        setCategory(productsCopy);
      } else if (
        e.target.id === "price-span" ||
        e.target.id === "filter-price"
      ) {
        document.getElementById("filter-price").style.color = "#820B8A";
        document.getElementById("filter-rating").style.color = "";
        if (document.getElementById("price-span").textContent === "▼") {
          document.getElementById("price-span").textContent = "▲";
          const categoryCopy = [...category];
          categoryCopy.sort((a, b) => b.price - a.price);
          setCategory(categoryCopy);
        } else {
          document.getElementById("price-span").textContent = "▼";
          const categoryCopy = [...category];
          categoryCopy.sort((a, b) => a.price - b.price);
          setCategory(categoryCopy);
        }
      } else if (
        e.target.id === "rating-span" ||
        e.target.id === "filter-rating"
      ) {
        document.getElementById("filter-rating").style.color = "#820B8A";
        document.getElementById("filter-price").style.color = "";
        if (document.getElementById("rating-span").textContent === "▼") {
          document.getElementById("rating-span").textContent = "▲";
          const categoryCopy = [...category];
          categoryCopy.sort((a, b) => b.rating.rate - a.rating.rate);
          setCategory(categoryCopy);
        } else {
          document.getElementById("rating-span").textContent = "▼";
          const categoryCopy = [...category];
          categoryCopy.sort((a, b) => a.rating.rate - b.rating.rate);
          setCategory(categoryCopy);
        }
      }
    } else if (e.target.nodeName === "OPTION") {
      const productsCopy = [...products];
      document.getElementById("filter-rating").style.color = "";
      document.getElementById("filter-price").style.color = "";
      document.getElementById("price-span").textContent = "▲";
      document.getElementById("rating-span").textContent = "▲";
      switch (e.target.id) {
        case "all":
          setCategory(productsCopy);
          break;
        case "jewelry":
          setCategory(
            productsCopy.filter((item) => item.category === "jewelery")
          );
          break;
        case "electronics":
          setCategory(
            productsCopy.filter((item) => item.category === "electronics")
          );
          break;
        case "women's-clothing":
          setCategory(
            productsCopy.filter((item) => item.category === "women's clothing")
          );
          break;
        case "men's-clothing":
          setCategory(
            productsCopy.filter((item) => item.category === "men's clothing")
          );
          break;
        default:
          console.log(e.target.id);
      }
    } else if (e.target.nodeName === "SELECT") {
      const productsCopy = [...products];
      document.getElementById("filter-rating").style.color = "";
      document.getElementById("filter-price").style.color = "";
      document.getElementById("price-span").textContent = "▲";
      document.getElementById("rating-span").textContent = "▲";
      switch (e.target.value) {
        case "all":
          setCategory(productsCopy);
          break;
        case "jewelry":
          setCategory(
            productsCopy.filter((item) => item.category === "jewelery")
          );
          break;
        case "electronics":
          setCategory(
            productsCopy.filter((item) => item.category === "electronics")
          );
          break;
        case "women's-clothing":
          setCategory(
            productsCopy.filter((item) => item.category === "women's clothing")
          );
          break;
        case "men's-clothing":
          setCategory(
            productsCopy.filter((item) => item.category === "men's clothing")
          );
          break;
        default:
          console.log(e.target.value);
      }
    }
  };

  return (
    <div id={"filter-bar"}>
      <div className="filter">filter shop items by: </div>
      <div className="category-wrapper">
        <label htmlFor="filter-category" name="category">
          category:
        </label>
        <select
          id="filter-category"
          value={value}
          data-testid="filter-options"
          onChange={handleClick}
        >
          <option id="all" value="all" data-testid="all">
            all
          </option>
          <option id="jewelry" value="jewelry" data-testid="jewelry">
            jewelry
          </option>
          <option
            id="electronics"
            value="electronics"
            data-testid="electronics"
          >
            electronics
          </option>
          <option
            id="women's-clothing"
            value="women's-clothing"
            data-testid="women's-clothing"
          >
            women's clothing
          </option>
          <option
            id="men's-clothing"
            value="men's-clothing"
            data-testid="men's-clothing"
          >
            men's clothing
          </option>
        </select>
      </div>
      <div id="filter-price" onClick={handleClick}>
        price <span id="price-span">▲</span>
      </div>
      <div id="filter-rating" onClick={handleClick}>
        rating <span id="rating-span">▲</span>
      </div>
      <div id="clear" onClick={handleClick}>
        clear
      </div>
    </div>
  );
};

export default FilterBar;
