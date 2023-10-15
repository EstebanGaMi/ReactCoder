import { useState, useEffect } from "react";
import { CounterPresentation } from "./CounterPresentation";

const CounterContainer = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("Out of stock");
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Out of stock");
    }
  };
  console.log("Me Monté");

  useEffect(() => {
    console.log("Se realizo una petición");
  }, []);
  return (
    <CounterPresentation
      count={count}
      increment={increment}
      decrement={decrement}
      onAdd={onAdd}
    />
  );
};
export default CounterContainer;
