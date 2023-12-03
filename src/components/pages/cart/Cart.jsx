import { Button, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { customTheme } from "../../../../themeConfig";
import { ThemeProvider } from "@mui/material/styles";
import { products } from "../../../productsMock";

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const clearCartWithAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar!`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "warning");
      }
    });
  };

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <section className="flex justify-center items-center m-auto my-[15%] text-center">
            <Card sx={{ maxWidth: 345 }}>
              <h2 className=" text-purple-800 font-bold text-xl">
                {product.title}
              </h2>
              <img src={product.img} />
              <div className=" flex justify-center text-center items-center gap-4">
                <h3 className=" text-black font-bold">
                  Cantidad: {product.quantity}
                </h3>
                <h3 className=" text-purple-500 font-bold">
                  € {product.price}
                </h3>
              </div>
              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
              <CardActions disableSpacing className="flex justify-around">
                <Link to="/checkout">
                  {/* Botón Buy Now con la función addToCart */}
                  <ThemeProvider theme={customTheme}>
                    <Button
                      onClick={() => addToCart(product)}
                      variant="contained"
                      color="secondary"
                      sx={{ ml: 2 }}
                    >
                      Buy now
                    </Button>
                  </ThemeProvider>
                </Link>

                <IconButton onClick={clearCartWithAlert}>
                  <DeleteForeverIcon color="secondary" />
                </IconButton>
              </CardActions>
            </Card>
          </section>
        </div>
      ))}
    </div>
  );
};
export default Cart;
