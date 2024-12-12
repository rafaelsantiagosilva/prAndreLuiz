import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Funcionario = conexao.define("Funcionario", {
  nome: {
    type: DataTypes.STRING,
  },
  salario: {
    type: DataTypes.INTEGER
  },
  CPF: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
});

//Cliente.sync(); se não funcionar descomenta essa linha

export default Funcionario;
