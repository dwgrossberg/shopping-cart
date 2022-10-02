import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import FilterBar from "../../components/FilterBar/FilterBar";
import "./products.scss";

const products = (props) => {
  const {
    products,
    setProducts,
    category,
    setCategory,
    cart,
    setCart,
    shuffle,
  } = props;

  return (
    <div>
      <FilterBar
        products={products}
        setProducts={setProducts}
        category={category}
        setCategory={setCategory}
        shuffle={shuffle}
      />
      <div className="products">
        {category.map((item) => {
          return (
            <Link to={"products/" + item.id}>
              <ProductCard
                key={item.id}
                product={item}
                cart={cart}
                setCart={setCart}
              />
            </Link>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default products;
