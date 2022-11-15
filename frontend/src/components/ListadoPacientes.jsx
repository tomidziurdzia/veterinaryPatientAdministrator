import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
  const { pacientes } = usePacientes();

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-gray-500">
            Listado Pacientes
          </h2>
          {pacientes.map((paciente) => (
            <Paciente key={paciente._id} paciente={paciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-gray-500">
            No hay pacientes
          </h2>
          <p className="text-gray-500 text-xl text-center mt-5 mb-10">
            Comienza agregado pacientes
          </p>
        </>
      )}
    </>
  );
};

export default ListadoPacientes;
