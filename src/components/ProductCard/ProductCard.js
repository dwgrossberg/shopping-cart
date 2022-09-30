import { useState } from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const handleClick = (e) => {
    const quant = e.target.parentElement.childNodes[1].innerText;
    setQuantity(quantity + 1);
    console.log(quant);
  };

  const { cart } = props;
  console.log(cart);
  const { category, image, price, rating, title } = props.product;
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img alt={title} src={image} className={category}></img>
      </div>
      <div className="product-title">{title}</div>
      <div className="rating">
        <div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <span
            className={"fa fa-star " + (rating.rate > 0 ? "checked" : "")}
          ></span>
          <span
            className={"fa fa-star " + (rating.rate > 1 ? "checked" : "")}
          ></span>
          <span
            className={"fa fa-star " + (rating.rate > 2 ? "checked" : "")}
          ></span>
          <span
            className={"fa fa-star " + (rating.rate > 3 ? "checked" : "")}
          ></span>
          <span
            className={"fa fa-star " + (rating.rate > 4 ? "checked" : "")}
          ></span>
        </div>
        <div className="rating-count">({rating.count})</div>
      </div>
      <div className="price-quant">
        <div className="price">${price}</div>
        <div className="quant">
          <button className="decrement" onClick={handleClick}>
            -
          </button>
          <div className="quant-number">{quantity}</div>
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
