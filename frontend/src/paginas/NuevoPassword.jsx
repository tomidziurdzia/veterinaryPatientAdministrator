import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";

const NuevoPassword = () => {
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`);
        setAlerta({ msg: "Coloca tu nuevo passowrd", error: false });
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: "Hubo un error con el enlace", error: true });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validando campos vacios
    if ([password, repetirPassword].includes("")) {
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

    // Guardando nueva contrasena
    try {
      const url = `/veterinarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, {
        password,
      });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPasswordModificado(true);
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
          Reestablecer Password
        </h1>
      </div>
      <div className="md:w-3/5 mx-5 grid md:mx-auto shadow-lg py-5 md:py-10 px-5 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}
        {tokenValido && (
          <>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  className="text-gray-600 block text-xl font-bold"
                  htmlFor=""
                >
                  Nuevo Password
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
                <label
                  className="text-gray-600 block text-xl font-bold"
                  htmlFor=""
                >
                  Repetir Nuevo Password
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
                value="Guardar"
                className="bg-indigo-500 w-full md:w-auto mt-5 py-3 px-10 text-xl rounded-xl text-white font-bold hover:cursor-pointer hover:bg-indigo-600"
              />
            </form>
            {passwordModificado && (
              <nav className="mt-6 text-center">
                <Link className="block text-center my-5 text-gray-500" to="/">
                  Ya tienes una cuenta? Inicia Sesion
                </Link>
              </nav>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NuevoPassword;
