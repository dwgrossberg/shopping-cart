import "./CartTotal.scss";

const CartTotal = (props) => {
  const { products, cart } = props;

  const calculateTotal = () => {
    return cart.reduce((accumulator, value) => {
      const price =
        value.quantity *
        products.find((item) => item.id === value.productId).price;
      console.log(price, accumulator, value);
      return accumulator + price;
    }, 0);
  };
  const addZeroes = (num) => {
    const dec = String(num).split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    return Number(num).toFixed(len);
  };

  return (
    <div className="cart-total">
      <div className="your-cart">
        <div>your shopping cart:</div>
      </div>
      <div className="cart-buttons"></div>
      <div className="price-total">{addZeroes(calculateTotal())}</div>
    </div>
  );
};
export default CartTotal;
