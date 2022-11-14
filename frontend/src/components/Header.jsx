import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { cerrarSesion } = useAuth();

  return (
    <>
      <header className="py-10 bg-indigo-400">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-white text-center text-bold text-2xl">
            Administrador de Pacientes de Veterinaria
          </h1>
          <nav className="flex gap-4 flex-col lg:flex-row items-center mt-5 lg:mt-0">
            <Link className="text-white text-l font-bold" to="/admin">
              Pacientes
            </Link>
            <Link className="text-white text-l font-bold" to="/perfil">
              Perfil
            </Link>
            <button
              onClick={cerrarSesion}
              className="text-white text-l font-bold"
              type="button"
            >
              Cerrar Sesion
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
