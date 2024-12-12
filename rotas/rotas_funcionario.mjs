import { Router } from "express";
import {
  novo,
  todos,
  um,
  altera,
  exclui,
} from "../controles/controle_funcionarios.mjs";

const rotas_funcionarios = Router();


// Test para ver se a API esta funcionando
//http://localhost:8000/funcionarios/
rotas_funcionarios.get("/", (req, res) => {
  res.status(200).json(true);
});

//http://localhost:8000/funcionarios/...

rotas_funcionarios.post("/cadastrar", novo); // /cadastrar
rotas_funcionarios.get("/listar", todos); // /listar
rotas_funcionarios.put("/editar", altera); // /editar
rotas_funcionarios.delete("/excluir/:id", exclui); // /excluir

export default rotas_funcionarios;
