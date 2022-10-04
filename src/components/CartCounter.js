const CartCounter = (props) => {
  const { price, quantity, cart, setCart } = props;
  const handleClick = (e) => {
    const quant = Number(e.target.parentElement.childNodes[1].innerText);
    const index = Number(
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id
        .split("-")
        .pop()
    );
    const cartCopy = [...cart];
    cartCopy.forEach((item) => {
      if (quant >= 1) {
        if (item.productId === index) {
          e.target.className === "increment"
            ? (item.quantity = item.quantity + 1)
            : (item.quantity = item.quantity - 1);
        }
      }
    });
    setCart(cartCopy.filter((item) => item.quantity !== 0));
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
