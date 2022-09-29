import "./ProductCard.scss";

const ProductCard = (props) => {
  const { category, image, price, rating, title } = props.product;
  console.log(props);
  return (
    <div className="product-card">
      <img alt={title} src={image} className={category}></img>
    </div>
  );
};

export default ProductCard;
