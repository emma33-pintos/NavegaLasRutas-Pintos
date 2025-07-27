import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) return <h2>El carrito está vacío</h2>;

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
    </div>
  );
}