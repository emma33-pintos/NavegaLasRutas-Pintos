import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, getTotalPrice, clearCart } = useCart();

  if (!cart.length)
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">
          <button>Ir al catálogo</button>
        </Link>
      </div>
    );

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>
        <b>Total:</b> ${getTotalPrice()}
      </p>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}