import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName ? "estoy intentando filtrar" : "estoy en el home");

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );
    const task = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products);
    });
    task.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return <ItemList items={items} />;
};
