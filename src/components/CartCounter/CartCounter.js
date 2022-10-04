import { useState } from "react";

const CartCounter = (props) => {
  const { price, quantity } = props;
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="price-quant">
      <div className="quant">
        <button className="decrement" onClick={handleClick}>
          -
        </button>
        <div className="quant-number">{quantity}</div>
        <button className="increment" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="price">${price}</div>
    </div>
  );
};

export default CartCounter;
