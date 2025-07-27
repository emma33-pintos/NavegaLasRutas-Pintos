import React from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

export default function ItemDetail({ id, title, price, image, description }) {
  const { addToCart } = useCart();

  const handleAdd = (cantidad) => {
    addToCart({ id, title, price, image }, cantidad);
    alert(`Agregado ${cantidad} al carrito`);
  };

  return (
    <div className="item-detail">
      <img src={image} alt={title} width={200} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><b>Precio:</b> ${price}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
}