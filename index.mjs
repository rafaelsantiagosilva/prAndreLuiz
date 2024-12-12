  import express from "express";
  import conexao from "./modelos/sync.mjs";
  import rotas_clientes from "./rotas/rotas_cliente.mjs";
  import { tryConnectSequelize } from "./database/mysql.mjs";
import rotas_funcionarios from "./rotas/rotas_funcionario.mjs";


  const app = express();

  app.use(express.json());

  app.use("/clientes", rotas_clientes);
  app.use("/funcionarios", rotas_funcionarios);

  app.use(express.static("views"));

  app.listen(8000, function () {
    tryConnectSequelize();
    console.log("Fazendo o L...");
  });
