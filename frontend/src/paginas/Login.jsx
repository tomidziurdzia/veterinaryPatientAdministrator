import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/veterinarios/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  return (
    <>
      <div className="md:h-24 h-24">
        <h1 className="text-indigo-500 font-black px-5 text-2xl md:text-3xl text-center">
          Inicia Sesion y Administra tus Pacientes
        </h1>
      </div>
      <div className="md:w-3/5 mx-5 grid md:mx-auto shadow-lg py-5 md:py-10 px-5 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        <form action="" onSubmit={handleSubmit}>
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
              placeholder="Password de registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Iniciar Sesion"
            className="bg-indigo-500 w-full md:w-auto mt-5 py-3 px-10 text-xl rounded-xl text-white font-bold hover:cursor-pointer hover:bg-indigo-600"
          />
        </form>
        <nav className="mt-6 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/registrar"
          >
            No tienes una cuenta? Registrate
          </Link>
          <Link
            className="block text-center mt-5 text-gray-500"
            to="/olvide-password"
          >
            Olvide mi password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
