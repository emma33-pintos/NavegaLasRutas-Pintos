import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export default function ItemListContainer({ greeting }) {
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
  if (!items.length) return <p>No hay productos en esta categoría.</p>;

  return (
    <section className="bienvenidx">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </section>
  );
}