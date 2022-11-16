import AdminNav from "./AdminNav";
import Alerta from "../components/Alerta";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({ pwd_actual: "", pwd_nuevo: "" });

  const { guardarPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msg: "El nuevo password debe tener minimo 6 caracteres",
        error: true,
      });
      return;
    }
    const respuesta = await guardarPassword(password);
    setAlerta(respuesta);
  };

  const { msg } = alerta;
  return (
    <>
      <AdminNav />
      <h2 className="text-gray-600 text-3xl text-center mt-10">
        Cambiar Password
      </h2>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg  p-5">
          {msg && <Alerta alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Password Actual
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="pwd_actual"
                placeholder="Escribe tu password actual"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Password Nuevo
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="pwd_nuevo"
                placeholder="Escribe tu nuevo password"
                onChange={(e) =>
                  setPassword({ ...password, [e.target.name]: e.target.value })
                }
              />
            </div>

            <input
              type="submit"
              value="Actualizar Password"
              className="py-2 px-10 w-full bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 text-white font-bold rounded-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CambiarPassword;
