import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../themeConfig";

import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
