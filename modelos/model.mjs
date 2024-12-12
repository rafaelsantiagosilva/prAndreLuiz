  import { DataTypes } from "sequelize";

  import conexao from "../database/mysql.mjs";

  const Cliente = conexao.define("Cliente", {
    nome: DataTypes.STRING,

    idade: DataTypes.INTEGER,
  });

  const Funcionario = conexao.define("Funcionario", {
    nome: DataTypes.STRING,

    salario: DataTypes.INTEGER,
  });

  Cliente.sync();
  Funcionario.sync();

  //export default { Cliente, Funcionario };

  export default Cliente();

