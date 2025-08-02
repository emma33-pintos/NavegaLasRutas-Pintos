import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import NotFound from "./components/NotFound";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import "./firebase.js";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const productsRef = collection(db, "productos");
    const q = id ? query(productsRef, where("category", "==", id)) : productsRef;
    getDocs(q)
      .then(snapshot => {
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(products);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <section className="bienvenidx">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidx a nuestra tienda!" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Bienvenidx a nuestra tienda!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Michi Libreria · Hecho con 💜</p>
    </footer>
  );
}

