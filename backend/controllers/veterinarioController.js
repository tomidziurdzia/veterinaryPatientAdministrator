const registrar = (req, res) => {
  res.send("Desde api");
};

const perfil = (req, res) => {
  res.send("Desde perfil");
};

export { registrar, perfil };
