import { conexao } from "../database/mysql.mjs";
import Cliente from "./cliente.mjs";
import Funcionario from "./funcionario.mjs";

conexao.sync();

export default conexao;
