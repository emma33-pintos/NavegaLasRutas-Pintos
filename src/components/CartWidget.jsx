import React from "react";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { getTotalQuantity } = useCart();
  const total = getTotalQuantity();

  return (
    <div style={{
      display: "inline-block",
      marginLeft: "10px",
      color: total > 0 ? "#2ecc40" : "#333",
      fontWeight: total > 0 ? "bold" : "normal"
    }}>
      🛒 <span>{total}</span>
    </div>
  );
}