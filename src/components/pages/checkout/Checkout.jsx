import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const capturarDatos = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (userInfo.nombre.length < 5) {
      setErrors({
        ...errors,
        nombre: "El nombre deber tener al menos 5 caracteres",
      });
      return;
    }
    if (!userInfo.email.includes("@")) {
      setErrors({
        ...errors,
        email: "No corresponde a un email valido",
      });
      return;
    }
    console.log(userInfo);
  };

  return (
    <div className=" flex justify-center mt-[150px]">
      <form
        className="bg-white flex flex-col shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center text-center min-w-[800px] justify-center"
        onSubmit={enviarFormulario}
      >
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          name="nombre"
          placeholder="Name"
          onChange={capturarDatos}
        />
        <span className=" text-red-600">{errors.nombre}</span>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          name="apellido"
          placeholder="Last Name"
          onChange={capturarDatos}
        />
        <span className=" text-red-600">{errors.apellido}</span>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          name="email"
          placeholder="Email"
          onChange={capturarDatos}
        />
        <span className=" text-red-600">{errors.email}</span>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
