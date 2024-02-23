import React from "react";

const NavBar = ({ subtotal, handleClearAll, handleOrder }) => {
  return (
    <div className="row nav-bar">
      <div className="col-6 subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
      <button className="order-bt" onClick={handleOrder}>
        Order
      </button>
      <button className="clear-all-bt" onClick={handleClearAll}>
        Clear all
      </button>
    </div>
  );
};

export default NavBar;
