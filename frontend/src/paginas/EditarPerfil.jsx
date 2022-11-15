import { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";

const EditarPerfil = () => {
  const { auth, actualizarPerfil } = useAuth();
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    setPerfil(auth);
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email } = perfil;
    if ([nombre, email].includes("")) {
      setAlerta({
        msg: "Email y nombre son obligatorios",
        error: true,
      });
      return;
    }
    const resultado = await actualizarPerfil(perfil);
    setAlerta(resultado);
  };

  const { msg } = alerta;

  return (
    <>
      <AdminNav />
      <h2 className="text-gray-600 text-3xl text-center mt-10">
        Editar Perfil
      </h2>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg  p-5">
          {msg && <Alerta alerta={alerta} />}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Nombre
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={(e) => {
                  setPerfil({ ...perfil, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Sitio Web
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="web"
                value={perfil.web || ""}
                onChange={(e) => {
                  setPerfil({ ...perfil, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Telefono
              </label>
              <input
                type="number"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="telefono"
                value={perfil.telefono || ""}
                onChange={(e) => {
                  setPerfil({ ...perfil, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Email
              </label>
              <input
                type="email"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="email"
                value={perfil.email || ""}
                onChange={(e) => {
                  setPerfil({ ...perfil, [e.target.name]: e.target.value });
                }}
              />
            </div>

            <input
              type="submit"
              value="Guardar Cambios"
              className="py-2 px-10 w-full bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 text-white font-bold rounded-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarPerfil;
