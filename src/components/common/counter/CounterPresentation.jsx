import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../../../../themeConfig";

export const CounterPresentation = ({ decrement, increment, count, onAdd }) => {
  return (
    <div className="flex justify-center items-center text-center">
      <button
        className="bg-gray-500 rounded-lg px-[10px] py-0"
        onClick={increment}
      >
        +
      </button>
      <h4 className="p-3">{count}</h4>
      <button
        className="bg-gray-500 rounded-lg px-[10px] py-0"
        onClick={decrement}
      >
        -
      </button>
      <ThemeProvider theme={customTheme}>
        <Button
          onClick={() => onAdd(count)}
          variant="contained"
          color="secondary"
          sx={{ ml: 1 }}
        >
          Add Cart
        </Button>
      </ThemeProvider>
    </div>
  );
};
