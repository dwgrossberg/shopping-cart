import { useParams } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import Rating from "../Rating/Rating";
import "./ProductDetails.scss";

const ProductDetails = (props) => {
  const { products, cart, setCart } = props;
  const params = useParams();
  const thisProduct = products.find((item) => item.id === Number(params.id));
  return (
    <div className="product-details" id={thisProduct.id}>
      <div className="left">
        <img alt="product-details" src={thisProduct.image}></img>
        <Rating rating={thisProduct.rating} />
      </div>
      <div className="right">
        <div className="details-title">{thisProduct.title}</div>
        <div className="details-description">{thisProduct.description}</div>
        <AddToCart price={thisProduct.price} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
