import React from "react";
import { useCart } from "../context/CartContext";

export default function CartWidget() {
  const { getTotalQuantity } = useCart();

  return (
    <div style={{ display: "inline-block", marginLeft: "10px" }}>
      🛒 <span>{getTotalQuantity()}</span>
    </div>
  );
}