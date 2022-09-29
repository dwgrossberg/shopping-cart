import "./ProductCard.scss";

const ProductCard = (props) => {
  const { category, image, price, rating, title } = props.product;
  console.log(props);
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img alt={title} src={image} className={category}></img>
      </div>
      <div className="product-title">{title}</div>
      <div className="price-quant">
        <div className="price">{price}</div>
        <div className="quant">
          <button className="decrement">-</button>
          <div className="quant-number">0</div>
          <button className="increment">+</button>
        </div>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
