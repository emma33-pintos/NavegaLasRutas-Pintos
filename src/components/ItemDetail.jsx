import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ title, price, image, description }) {
  const handleAdd = (cantidad) => {
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