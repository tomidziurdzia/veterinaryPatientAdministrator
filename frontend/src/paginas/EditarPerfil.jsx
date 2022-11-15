import AdminNav from "./AdminNav";

const EditarPerfil = () => {
  return (
    <>
      <AdminNav />
      <h2 className="text-gray-600 text-3xl text-center mt-10">
        Editar Perfil
      </h2>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg  p-5">
          <form action="">
            <div className="my-3">
              <label htmlFor="" className="text-gray-500 font-bold">
                Nombre
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-2 mb-5 rounded-lg"
                name="nombre"
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
