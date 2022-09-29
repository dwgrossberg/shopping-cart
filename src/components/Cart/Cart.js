import cartIcon from "../../assets/cart.png";
import "./Cart.scss";

const Cart = () => {
  return (
    <div id="cart">
      <img alt="cart" src={cartIcon}></img>
    </div>
  );
};

export default Cart;
