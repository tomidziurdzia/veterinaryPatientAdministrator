import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="md:h-24 h-40">
        <h1 className="text-indigo-500 font-black text-3xl text-center">
          Inicia Sesion y Administra tus Pacientes
        </h1>
      </div>
      <div className="md:w-3/5 px-5 md:px-0 grid mx-auto">
        <form action="">
          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Email
            </label>
            <input
              type="email"
              placeholder="Email de registro"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
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
            className="block text-center my-5 text-gray-500"
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
