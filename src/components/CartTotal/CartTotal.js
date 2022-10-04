import "./CartTotal.scss";

const CartTotal = (props) => {
  const { products, cart } = props;

  const calculateTotal = () => {
    return cart.reduce((accumulator, value) => {
      const price =
        value.quantity *
        products.find((item) => item.id === value.productId).price;
      return accumulator + price;
    }, 0);
  };
  const addZeroes = (num) => {
    return Number(num).toFixed(2);
  };
  const addItems = () => {
    return cart.reduce((accumulator, value) => {
      return accumulator + value.quantity;
    }, 0);
  };

  return (
    <div className="cart-total">
      <div className="your-cart">
        <div>your shopping cart:</div>
      </div>
      <div className="cart-buttons">
        <button className="checkout">
          <a href="https://www.theodinproject.com/">checkout</a>
        </button>
      </div>
      <div className="items-total">{addItems()}</div>
      <div className="price-total">${addZeroes(calculateTotal())}</div>
    </div>
  );
};
export default CartTotal;
