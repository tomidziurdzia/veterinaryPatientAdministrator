import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <div className="md:h-24 h-24">
        <h1 className="text-indigo-500 font-black px-5 text-2xl md:text-3xl text-center">
          Crea tu Cuenta y Administra tus Pacientes
        </h1>
      </div>
      <div className="md:w-3/5 mx-5 grid md:mx-auto shadow-lg py-5 md:py-10 px-5 rounded-xl bg-white">
        <form action="">
          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
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
              placeholder="Tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-600 block text-xl font-bold" htmlFor="">
              Repetir Password
            </label>
            <input
              type="password"
              placeholder="Repite tu password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>
          <input
            type="submit"
            value="Registrar"
            className="bg-indigo-500 w-full md:w-auto mt-5 py-3 px-10 text-xl rounded-xl text-white font-bold hover:cursor-pointer hover:bg-indigo-600"
          />
        </form>
        <nav className="mt-6 text-center">
          <Link className="block text-center my-5 text-gray-500" to="/">
            Ya tienes una cuenta? Inicia Sesion
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Registrar;
