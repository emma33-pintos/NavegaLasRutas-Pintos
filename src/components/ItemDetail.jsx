import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ItemDetail({ id, title, price, image, description }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (cantidad) => {
    addToCart({ id, title, price, image }, cantidad);
    setAdded(true);
    Swal.fire({
      icon: "success",
      title: "¡Agregado!",
      text: `Agregaste ${cantidad} "${title}" al carrito.`,
      timer: 1800,
      showConfirmButton: false,
    });
  };

  return (
    <div className="item-detail">
      <img src={image} alt={title} width={200} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><b>Precio:</b> ${price}</p>
      {!added ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <div>
          <p style={{ color: "green" }}>¡Producto agregado al carrito!</p>
          <Link to="/cart"><button>Ir al carrito</button></Link>
        </div>
      )}
    </div>
  );
}