import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../data/products"; 

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts(id).then(setItems);
  }, [id]);

  return (
    <section className="bienvenidx">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </section>
  );
}