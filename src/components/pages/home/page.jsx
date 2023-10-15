import React from "react";
import { ItemListContainer } from "../itemListContainer/itemListContainer";
import SelectorCard from "../../common/selectorCard/SelectorCard";

export const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 mt-[180px]">
      <SelectorCard />
      <ItemListContainer />
    </section>
  );
};
