import React from "react";

function SubtotalRow({ subtotal }) {
  const displaySubtotal = subtotal >= 0 ? subtotal.toFixed(2) : "0.00";
  return (
    <>
      <div className="col-4 subtotal">Subtotal: ${displaySubtotal}</div>
      <div className="col-8">
        <button></button>
      </div>
    </>
  );
}

export default SubtotalRow;
