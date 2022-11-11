const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "bg-red-400" : "bg-indigo-400"
      } text-center p-3 rounded-xl text-white font-bold mb-6`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
