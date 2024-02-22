import React, { useState } from "react";

function ItemCounter({ price, handleQuantityChange }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
    handleQuantityChange(1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      handleQuantityChange(-1);
    }
  };

  return (
    <div className="counter-updater">
      <button className="button buttons minus" onClick={decrementCount}>
        -
      </button>
      <div className="count">{count}</div>
      <button className="button buttons add" onClick={incrementCount}>
        +
      </button>
    </div>
  );
}

export default ItemCounter;
