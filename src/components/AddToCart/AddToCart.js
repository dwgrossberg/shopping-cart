import { useEffect, useState } from "react";
import "./AddToCart.scss";

const AddToCart = (props) => {
  const { cart, setCart, price } = props;
  const [quantity, setQuantity] = useState(1);
  const handleClick = (e) => {
    const quant = e.target.parentElement.childNodes[1].innerText;
    if (Number(quant) === 1) {
      if (e.target.innerText === "+") setQuantity(quantity + 1);
    } else if (quant > 1)
      e.target.innerText === "-"
        ? setQuantity(quantity - 1)
        : setQuantity(quantity + 1);
  };

  const addToCart = (e) => {
    document.getElementById("cart-count").style.backgroundColor = "#820b8a";
    document.getElementById("cart-count").style.color = "white";
    setTimeout(() => {
      document.getElementById("cart-count").style.backgroundColor = "";
      document.getElementById("cart-count").style.color = "";
    }, 150);

    let prodId;
    if (e.target.parentElement.parentElement.parentElement.id) {
      prodId = Number(e.target.parentElement.parentElement.parentElement.id);
    } else {
      prodId = Number(e.target.parentElement.parentElement.id);
    }
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
  };

  return (
    <div className="button-container">
      <div className="price-quant">
        <div className="price">${price}</div>
        <div className="quant">
          <button className="decrement" onClick={handleClick}>
            -
          </button>
          <div className="quant-number" data-testid="quant">
            {quantity}
          </div>
          <button className="increment" onClick={handleClick}>
            +
          </button>
        </div>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
