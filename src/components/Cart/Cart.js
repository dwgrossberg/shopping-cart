import cartIcon from "../../assets/cart.png";
import "./Cart.scss";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <div id="cart">
      <img alt="cart" src={cartIcon}></img>
      {cart.length > 0 && <div id="cart-count">{cart.length}</div>}
    </div>
  );
};

export default Cart;
