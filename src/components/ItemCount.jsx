import React, { useState } from "react";

export default function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count < stock ? count + 1 : stock)}>+</button>
      <button style={{ marginLeft: "10px" }} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}