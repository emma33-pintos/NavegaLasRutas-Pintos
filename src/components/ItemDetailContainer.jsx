import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../data/products";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return <ItemDetail {...product} />;
}