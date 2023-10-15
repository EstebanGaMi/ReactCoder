import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export const CarWidget = () => {
  return (
    <Link to="/cart" className="flex justify-center text-center items-center">
      <Badge badgeContent={1} color="secondary">
        <ShoppingCartIcon className="text-white" />
      </Badge>
    </Link>
  );
};
