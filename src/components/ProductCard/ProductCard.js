import { useState } from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  const handleClick = (e) => {
    console.log(e.target);
  };

  const { category, image, price, rating, title } = props.product;
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img alt={title} src={image} className={category}></img>
      </div>
      <div className="product-title">{title}</div>
      <div className="rating">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
      <div className="price-quant">
        <div className="price">${price}</div>
        <div className="quant">
          <button className="decrement" onClick={handleClick}>
            -
          </button>
          <div className="quant-number">1</div>
          <button className="increment" onClick={handleClick}>
            +
          </button>
        </div>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
