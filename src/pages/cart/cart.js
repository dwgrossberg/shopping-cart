import CartCounter from "../../components/CartCounter";
import CartTotal from "../../components/CartTotal/CartTotal";
import deleteIcon from "../../assets/delete.png";
import "./cart.scss";

const cart = (props) => {
  const { products, cart, setCart } = props;
  const handleClick = (e) => {
    const parts = e.target.id.split("-");
    const id = Number(parts.pop());
    setCart(cart.filter((item) => item.productId !== id));
  };

  return (
    <div className="cart">
      {cart.map((item) => {
        return (
          <div
            key={item.productId}
            className={"cart-items"}
            id={"cart-item-" + item.productId}
          >
            <img
              alt="cart-product"
              src={products.find((prod) => prod.id === item.productId).image}
            ></img>
            <div className="title-quantity">
              <div className="cart-title">
                {products.find((prod) => prod.id === item.productId).title}
              </div>
              <div className="cart-quantity">
                <CartCounter
                  quantity={item.quantity}
                  price={
                    products.find((prod) => prod.id === item.productId).price
                  }
                  cart={cart}
                  setCart={setCart}
                />
              </div>
              <img
                onClick={handleClick}
                className="remove-item"
                id={"remove-item-" + item.productId}
                alt="remove-item"
                src={deleteIcon}
              ></img>
            </div>
          </div>
        );
      })}
      <CartTotal products={products} cart={cart} />
    </div>
  );
};

export default cart;
