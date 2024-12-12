import { tbClientes } from "./base_temporaria.js";

function getLista() {
  return tbClientes;
}

function novo(obj) {
  tbClientes.push(obj);
}

export { getLista, novo };
