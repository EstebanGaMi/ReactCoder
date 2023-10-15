import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/layout/navbar/Navbar";
import { NotFound } from "./components/pages/notFound/Page";
import { Cart } from "./components/pages/cart/Cart";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../themeConfig";
import { Home } from "./components/pages/home/page";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryName" element={<Home />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/" element={<ItemListContainer />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
