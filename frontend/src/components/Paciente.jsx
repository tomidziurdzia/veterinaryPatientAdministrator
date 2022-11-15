const Paciente = ({ paciente }) => {
  const { email, fecha, nombre, propietario, sintomas, _id } = paciente;

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    return new Intl.DateTimeFormat("es-AR", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };
  return (
    <div className="mx-5 my-1 bg-white shadow-md px-5 py-10 rounded-md">
      <p className="font-bold text-gray-500 my-2">
        Nombre: <span className="font-normal">{nombre}</span>
      </p>
      <p className="font-bold text-gray-500 my-2">
        Propietario: <span className="font-normal">{propietario}</span>
      </p>
      <p className="font-bold text-gray-500 my-2">
        Email: <span className="font-normal">{email}</span>
      </p>
      <p className="font-bold text-gray-500 my-2">
        Fecha: <span className="font-normal">{formatearFecha(fecha)}</span>
      </p>
      <p className="font-bold text-gray-500 my-2">
        Sintomas: <span className="font-normal">{sintomas}</span>
      </p>
      <div className="flex justify-between my-5">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
