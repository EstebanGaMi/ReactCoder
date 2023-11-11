import { Cart } from "../components/pages/cart/Cart";
import { Home } from "../components/pages/home/page";
import { ItemDetailContainer } from "../components/pages/itemDetailContainer/ItemDetailContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: Home,
  },
];
