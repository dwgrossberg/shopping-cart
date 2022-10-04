import ProductCard from "../../components/ProductCard/ProductCard.js";
import FilterBar from "../../components/FilterBar/FilterBar";
import "./products.scss";

const products = (props) => {
  const { products, setProducts, category, setCategory, cart, setCart } = props;

  return (
    <div>
      <FilterBar
        products={products}
        setProducts={setProducts}
        category={category}
        setCategory={setCategory}
      />
      <div className="products">
        {category.map((item) => {
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
