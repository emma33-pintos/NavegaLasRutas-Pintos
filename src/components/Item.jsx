import React from "react";
import { Link } from "react-router-dom";

export default function Item({ id, title, price, image }) {
  return (
    <div className="item-card">
      <img src={image} alt={title} width={120} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}