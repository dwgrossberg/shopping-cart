import ProductCard from "../../components/ProductCard/ProductCard.js";
import "./products.scss";

const products = (props) => {
  const { products, cart, setCart } = props;
  return (
    <div className="products">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            product={item}
            cart={cart}
            setCart={setCart}
          />
        );
      })}{" "}
    </div>
  );
};

export default products;
