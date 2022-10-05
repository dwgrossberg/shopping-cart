import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const { cart, setCart, product } = props;
  const { category, image, price, rating, title, id } = props.product;
  return (
    <div className="product-card" id={id}>
      <div className="card-wrapper">
        <Link to={"/products/" + id} style={{ textDecoration: "none" }}>
          <div className="img-wrapper">
            <img alt="product-item" src={image} className={category}></img>
          </div>
          <div className="product-title">{title}</div>
          <Rating rating={rating} />
        </Link>
      </div>
      <AddToCart
        price={price}
        cart={cart}
        setCart={setCart}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
