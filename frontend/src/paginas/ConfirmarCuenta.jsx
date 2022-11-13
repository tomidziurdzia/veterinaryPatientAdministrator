import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `${
          import.meta.env.VITE_BACKEND_URL
        }/api/veterinarios/confirmar/${id}`;
        const { data } = await axios(url);

        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
        });
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true });
      }
    };
    setCargando(false);
    confirmarCuenta();
  }, []);

  return (
    <>
      <div className="md:h-24 h-24">
        <h1 className="text-indigo-500 font-black px-5 text-2xl md:text-3xl text-center">
          Confirma tu Cuenta y Administra tus Pacientes
        </h1>
      </div>
      <div className="md:w-3/5 mx-5 grid md:mx-auto shadow-lg py-5 md:py-10 px-5 rounded-xl bg-white">
        {!cargando && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <div className="flex justify-center">
            <Link
              className="block text-center p-3 border border-indigo-400 text-indigo-400 w-1/3 rounded-lg hover:border-white hover:text-white hover:bg-indigo-400 transition-all"
              to="/"
            >
              Iniciar Sesion
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
