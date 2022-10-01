import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import FilterBar from "../../components/FilterBar/FilterBar";
import "./Products.scss";

const Products = (props) => {
  const { category, setCategory } = useState([]);
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

export default Products;
