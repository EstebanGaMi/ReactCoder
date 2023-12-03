import React from "react";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../../../../themeConfig";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutOficial = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();

  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const {
    handleChange: handleChangeFormik,
    handleSubmit: handleSubmitFormik,
    errors,
    values,
    isSubmitting,
  } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },

    onSubmit: (data) => {
      // Enviar datos o mostrar el mensaje según sea necesario
      if (orderId) {
        console.log("Mostrar mensaje de agradecimiento");
      } else {
        console.log("Enviar datos del formulario", data);
        // Aquí podrías agregar la lógica para enviar los datos del formulario
        // y luego actualizar el estado con setOrderId si es exitoso.
        sendFormData(data);
      }
    },

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El campo es obligatorio")
        .min(5, "debe tener al menos 5 caracteres")
        .max(20, "no debe superar los 20 caracteres"),
      apellido: Yup.string().required("El campo es obligatorio"),
      email: Yup.string()
        .email("El mail no parece valido debe contener @")
        .required("El campo es obligatorio"),
      // ... Agrega tus validaciones para otros campos
    }),
  });

  const handleChange = (evento) => {
    handleChangeFormik(evento);
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    handleSubmitFormik();
  };

  const sendFormData = (data) => {
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.error("Error al enviar datos:", error));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  useEffect(() => {
    // Este efecto se ejecutará cuando orderId cambie
    // Puedes agregar aquí cualquier lógica adicional que necesites
    console.log("El orderId ha cambiado:", orderId);
  }, [orderId]);

  return (
    <>
      {orderId ? (
        <div className=" justify-center items-center text-center">
          <h2 className=" font-bold mb-3">
            Gracias por su compra, su N° de comprobante es: {orderId}
          </h2>
          <Link className=" bg-purple-600 rounded-sm p-1" to="/">
            Seguir comprando
          </Link>
        </div>
      ) : (
        <form
          className=" flex flex-col gap-4 justify-center text-center items-center mt-10"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Nombre"
            variant="outlined"
            name="nombre"
            onChange={handleChange}
            value={values.nombre}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />

          <TextField
            label="Apellido"
            variant="outlined"
            name="apellido"
            onChange={handleChange}
            value={values.apellido}
            error={errors.apellido ? true : false}
            helperText={errors.apellido}
          />

          <TextField
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            value={values.email}
            error={errors.email ? true : false}
            helperText={errors.email}
          />

          <Button
            color="secondary"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
          >
            Enviar
          </Button>

          <Button color="secondary" variant={"outlined"} type="button">
            Cancelar
          </Button>
        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
