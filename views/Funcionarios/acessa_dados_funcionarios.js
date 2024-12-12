import { tbFuncionarios } from "./base_temporaria.js";

function getLista() {
  return tbFuncionarios;
}

function novo(obj) {
  tbFuncionarios.push(obj);
}

export { getLista, novo };
