import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, getTotalQuantity, getTotalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer: form,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: getTotalPrice ? getTotalPrice() : cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0),
    };
    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart && clearCart();
    } catch (error) {
      alert("Error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId)
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu código de orden es: <b>{orderId}</b></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );

  if (!cart || cart.length === 0)
    return <h2>El carrito está vacío</h2>;

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 300, margin: "auto" }}>
      <h2>Finalizar compra</h2>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
      <button type="submit" disabled={loading}>Confirmar compra</button>
    </form>
  );
}