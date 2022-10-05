import cartIcon from "../../assets/cart.png";
import "./CartIcon.scss";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div id="cart">
      <img alt="shopping-cart" src={cartIcon}></img>
      {cart.length > 0 && <div id="cart-count">{cart.length}</div>}
    </div>
  );
};

export default Cart;
