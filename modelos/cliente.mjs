import { DataTypes } from "sequelize";
import { conexao } from "../database/mysql.mjs";

const Cliente = conexao.define("Cliente", {
  nome: {
    type: DataTypes.STRING,
  },
  idade: {
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

export default Cliente;
