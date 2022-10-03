import AddToCart from "../../components/AddToCart/AddToCart";
import ItemCounter from "../../components/ItemCounter/ItemCounter";
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
                <ItemCounter
                  quantity={item.quantity}
                  setCart={setCart}
                  price={
                    products.find((prod) => prod.id === item.productId).price
                  }
                />
                {/* <AddToCart
                  cart={cart}
                  setCart={setCart}
                  price={
                    products.find((prod) => prod.id === item.productId).price
                  }
                /> */}
                {item.quantity}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default cart;
