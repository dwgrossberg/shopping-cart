import "./FilterBar.scss";

const FilterBar = (props) => {
  return (
    <div id={"filter-bar"}>
      <div className="filter">Filter shop items by: </div>
      <div className="category-wrapper">
        <label htmlFor="filter-category" name="category">
          category:{" "}
        </label>
        <select id="filter-category">
          <option>jewelery</option>
          <option>electronics</option>
          <option>women's clothing</option>
          <option>men's clothing</option>
        </select>
      </div>
      <div id="filter-price">
        price <span id="price-span">▲</span>
      </div>
      <div id="filter-rating">
        rating <span id="rating-span">▲</span>
      </div>
    </div>
  );
};

export default FilterBar;
