import AddToCart from "../AddToCart/AddToCart";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { cart, setCart } = props;
  const { category, image, price, rating, title, id } = props.product;
  return (
    <div className="product-card" id={id}>
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
      <AddToCart price={price} cart={cart} setCart={setCart} />
    </div>
  );
};

export default ProductCard;
