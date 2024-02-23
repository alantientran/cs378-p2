import React, { useState } from "react";

const MenuItem = ({
  title,
  imgSrc,
  description,
  price,
  subtotal,
  updateSubtotal,
  updateCart,
}) => {
  var [itemCount, setItemCount] = useState(0);

  /* Updates counters upon clearAll input */
  if (itemCount !== 0 && subtotal === 0) {
    setItemCount(0);
  }

  const addItem = () => {
    const updatedCount = itemCount + 1;
    updateCart(title, updatedCount);
    setItemCount(itemCount + 1);
    updateSubtotal(price);
  };

  const removeItem = () => {
    if (itemCount !== 0) {
      const updatedCount = itemCount - 1;
      updateCart(title, updatedCount);
      setItemCount(updatedCount);
      updateSubtotal(-price);
    }
  };

  return (
    <>
      <div className="col-4">
        <img src={imgSrc} className="img-responsive" alt={title} />
      </div>
      <div className="col-8 menu-item-text">
        <div>
          <h2 className="item-name">{title}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="row price-and-bt">
          <div className="col-6">
            <p className="price">Price: ${price}</p>
          </div>
          <div className="col-6 counter-updater">
            <button className="button buttons minus" onClick={removeItem}>
              -
            </button>
            <div className="count">{itemCount}</div>
            <button className="button buttons add" onClick={addItem}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
