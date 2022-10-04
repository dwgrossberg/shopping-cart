import CartCounter from "../../components/CartCounter";
import CartTotal from "../../components/CartTotal/CartTotal";
import "./cart.scss";

const cart = (props) => {
  const { products, cart, setCart } = props;

  return (
    <div className="cart">
      {cart.map((item) => {
        return (
          <div key={item.productId} className={"cart-items"}>
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
                />
              </div>
            </div>
          </div>
        );
      })}
      <CartTotal products={products} cart={cart} />
    </div>
  );
};

export default cart;
