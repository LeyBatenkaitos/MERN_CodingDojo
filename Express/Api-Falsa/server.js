const express = require("express");
const Empresa = require("./models/Compañia");
const Usuario = require("./models/Usuario");

const port = 5000;

const app = express();
app.get("/api/users/new", (req, res) => {
  const nuevoUsuario = new Usuario();
  res.json(nuevoUsuario);
});
app.get("/api/companies/new", (req, res) => {
  const nuevaCompañia = new Empresa();
  res.json(nuevaCompañia);
});
app.get("/api/user/company", (req, res) => {
  const company = new Empresa();
  const user = new Usuario();
  res.json({ company, user });
});
app.listen(port, () => console.log(`El servidor esta en PORT: ${port}`));
