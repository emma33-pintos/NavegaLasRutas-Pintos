import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProduct(null);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail {...product} />;
}