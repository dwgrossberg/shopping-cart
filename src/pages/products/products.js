import ProductCard from "../../components/ProductCard/ProductCard.js";
import "./products.scss";

const products = (props) => {
  console.log(props);
  const { products } = props;
  return (
    <div className="products">
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}{" "}
    </div>
  );
};

export default products;
