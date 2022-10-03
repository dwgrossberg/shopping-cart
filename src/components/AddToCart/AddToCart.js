import { useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "./AddToCart.scss";

const AddToCart = (props) => {
  const [quantity, setQuantity] = useState(1);

  const { cart, setCart, price } = props;
  const addToCart = (e) => {
    const prodId = Number(e.target.parentElement.parentElement.id);
    if (cart.find((item) => item.productId === prodId)) {
      const quant = cart.find((item) => item.productId === prodId).quantity;
      setCart([
        ...cart.filter((item) => item.productId !== prodId),
        {
          productId: prodId,
          quantity: quant + quantity,
        },
      ]);
    } else {
      setCart([...cart, { productId: prodId, quantity: quantity }]);
    }
    console.log(cart);
  };

  return (
    <div className="button-container">
      <ItemCounter
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
      />
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
