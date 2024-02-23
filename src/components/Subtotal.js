import React from "react";

function Subtotal({ subtotal }) {
  const displaySubtotal = subtotal >= 0 ? subtotal.toFixed(2) : "0.00";
  return (
    <>
      <div>Subtotal: ${displaySubtotal}</div>
    </>
  );
}

export default Subtotal;
