import { useParams } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./ProductDetails.scss";

const ProductDetails = (props) => {
  const { products } = props;
  const params = useParams();
  const thisProduct = products.find((item) => item.id === Number(params.id));
  console.log(thisProduct);
  return (
    <div className="product-details">
      <div className="left">
        <img alt="product-details" src={thisProduct.image}></img>
        <Rating rating={thisProduct.rating} />
      </div>
      <div className="right"></div>
    </div>
  );
};

export default ProductDetails;
