import { ProductCard } from "../../common/productCard/ProductCard";

import React from "react";

export const ItemList = ({ items }) => {
  return (
    <section className="flex flex-wrap gap-5 justify-center mx-[40px]">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};
