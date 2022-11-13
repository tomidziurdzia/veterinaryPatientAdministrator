import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validando campos vacios
    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }

    // Validando passwords
    if (password !== repetirPassword) {
      setAlerta({ msg: "Las contrasenas no coinciden", error: true });
      return;
    }

    // Validando tamano password
    if (password.length < 6) {
      setAlerta({ msg: "Password corto", error: true });
      return;
    }

    setAlerta({});

    // Crear el usuario en la API
    try {
      await clienteAxios.post("/veterinarios", { nombre, email, password });
      setAlerta({
        msg: "Creado Correctamente, revisa tu email",
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div className="md:h-24 h-24">
        <h1 className="text-indigo-500 font-black px-5 text-2xl md:text-3xl text-center">
          Crea tu Cuenta y Administra tus Pacientes
        </h1>
      </div>
      <div className="md:w-3/5 mx-5 grid md:mx-auto shadow-lg py-5 md:py-10 px-5 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Password
            </label>
            <input
              type="password"
              placeholder="Tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Repetir Password
            </label>
            <input
              type="password"
              placeholder="Repite tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Registrar"
            className="bg-indigo-500 w-full md:w-auto mt-5 py-3 px-10 text-xl rounded-xl text-white font-bold hover:cursor-pointer hover:bg-indigo-600"
          />
        </form>
        <nav className="mt-6 text-center">
          <Link className="block text-center my-5 text-gray-500" to="/">
            Ya tienes una cuenta? Inicia Sesion
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
