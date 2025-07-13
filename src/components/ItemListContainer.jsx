import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../data/products"; 

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts(id).then(setItems);
  }, [id]);

  return (
    <section className="bienvenidx">
      <ItemList items={items} />
    </section>
  );
}