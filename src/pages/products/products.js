import ProductCard from "../../components/ProductCard/ProductCard.js";
import FilterBar from "../../components/FilterBar/FilterBar";
import "./products.scss";

const products = (props) => {
  const { products, setProducts, cart, setCart } = props;
  return (
    <div>
      <FilterBar products={products} setProducts={setProducts} />
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
    </div>
  );
};

export default products;
