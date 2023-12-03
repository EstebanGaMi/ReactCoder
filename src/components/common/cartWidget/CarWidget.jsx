import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart" className="flex justify-center text-center items-center">
      <Badge badgeContent={total} color="secondary">
        <ShoppingCartIcon className="text-white" />
      </Badge>
    </Link>
  );
};
export default CartWidget;
