import "./FilterBar.scss";

const FilterBar = (props) => {
  const { products, setProducts } = props;

  const handleClick = (e) => {
    if (e.target.nodeName === "SPAN" || e.target.nodeName === "DIV") {
      if (e.target.id === "price-span" || e.target.id === "filter-price") {
        if (document.getElementById("price-span").textContent === "▼") {
          document.getElementById("price-span").textContent = "▲";
          const productsCopy = [...products];
          productsCopy.sort((a, b) => b.price - a.price);
          setProducts(productsCopy);
        } else {
          document.getElementById("price-span").textContent = "▼";
          const productsCopy = [...products];
          productsCopy.sort((a, b) => a.price - b.price);
          setProducts(productsCopy);
        }
      } else if (
        e.target.id === "rating-span" ||
        e.target.id === "filter-rating"
      ) {
        if (document.getElementById("rating-span").textContent === "▼") {
          document.getElementById("rating-span").textContent = "▲";
          const productsCopy = [...products];
          productsCopy.sort((a, b) => b.rating.rate - a.rating.rate);
          setProducts(productsCopy);
        } else {
          document.getElementById("rating-span").textContent = "▼";
          const productsCopy = [...products];
          productsCopy.sort((a, b) => a.rating.rate - b.rating.rate);
          setProducts(productsCopy);
        }
      }
      console.log(e.target.id);
    } else if (e.target.nodeName === "OPTION") {
      console.log(e.target.id);
    }
  };

  return (
    <div id={"filter-bar"}>
      <div className="filter">Filter shop items by: </div>
      <div className="category-wrapper">
        <label htmlFor="filter-category" name="category">
          category:
        </label>
        <select id="filter-category" onClick={handleClick}>
          <option id="jewelery">jewelery</option>
          <option id="electronics">electronics</option>
          <option id="women's-clothing">women's clothing</option>
          <option id="men's-clothing">men's clothing</option>
        </select>
      </div>
      <div id="filter-price" onClick={handleClick}>
        price <span id="price-span">▲</span>
      </div>
      <div id="filter-rating" onClick={handleClick}>
        rating <span id="rating-span">▲</span>
      </div>
    </div>
  );
};

export default FilterBar;
