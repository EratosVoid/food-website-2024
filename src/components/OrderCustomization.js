import React, { useState } from "react";

function OrderCustomization() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Customize Your Order</h2>
      <p>Select size and ingredients for your order.</p>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default OrderCustomization;
