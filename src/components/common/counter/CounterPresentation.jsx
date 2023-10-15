import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../../../../themeConfig";

export const CounterPresentation = ({ decrement, increment, count, onAdd }) => {
  return (
    <div>
      <button className="bg-gray-500 rounded-xl p-2 m-2" onClick={increment}>
        sumar
      </button>
      <h4>{count}</h4>
      <button className="bg-gray-500 rounded-xl p-2 m-2" onClick={decrement}>
        restar
      </button>
      <ThemeProvider theme={customTheme}>
        <Button
          onClick={() => onAdd(count)}
          variant="contained"
          color="secondary"
          sx={{ ml: 2 }}
        >
          Add Cart
        </Button>
      </ThemeProvider>
    </div>
  );
};
