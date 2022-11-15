import { useState } from "react";
import Alerta from "./Alerta";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState(Date.now());
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
  };

  const { msg } = alerta;

  return (
    <>
      <p className="text-lg text-center mb-10">
        Anade tus pacientes y administralos
      </p>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="bg-white py-10 px-5 mx-5 lg:mx-0 mb-10 lg:mb-10 shadow-md rounded-md"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label className="text-gray-600 font-bold" htmlFor="nombre">
            Nombre Mascota
          </label>
          <input
            type="text"
            placeholder="Nombre mascota"
            id="nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="text-gray-600 font-bold" htmlFor="propietario">
            Nombre Propietario
          </label>
          <input
            type="text"
            placeholder="Nombre propietario"
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="text-gray-600 font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Email del propietario"
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="text-gray-600 font-bold" htmlFor="fecha">
            Fecha Alta
          </label>
          <input
            type="date"
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="text-gray-600 font-bold" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            placeholder="Sintomas del paciente"
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-indigo-500  w-full  py-3 px-10 text-xl rounded-xl text-white font-bold hover:cursor-pointer hover:bg-indigo-600 transition-colors"
        />
      </form>
    </>
  );
};

export default Formulario;
