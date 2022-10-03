import { useState } from "react";
import "./ItemCounter.scss";

const ItemCounter = (props) => {
  const { quantity, setQuantity, price } = props;
  const handleClick = (e) => {
    const quant = e.target.parentElement.childNodes[1].innerText;
    if (Number(quant) === 1) {
      if (e.target.innerText === "+") setQuantity(quantity + 1);
    } else if (quant > 1)
      e.target.innerText === "-"
        ? setQuantity(quantity - 1)
        : setQuantity(quantity + 1);
  };

  const addZeroes = (num) => {
    const dec = String(num).split(".")[1];
    const len = dec && dec.length > 2 ? dec.length : 2;
    return Number(num).toFixed(len);
  };

  return (
    <div className="price-quant">
      <div className="price">${addZeroes(price)}</div>
      <div className="quant">
        <button className="decrement" onClick={handleClick}>
          -
        </button>
        <div className="quant-number">{quantity}</div>
        <button className="increment" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
