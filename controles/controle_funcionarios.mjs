import Funcionario from "../modelos/funcionario.mjs";

async function novo(req, res) {
  try {
    const criado = await Funcionario.create({
      nome: req.body.nome,
      salario: req.body.salario,
      CPF: req.body.CPF,
      email: req.body.email
    });

    res.json(criado);
  } catch (e) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar funcionário" });
  }
}

async function um(req, res) {
  const fun = await Funcionario.findOne({
    where: { id: req.params.id },
  });

  res.json(fun);
}

async function todos(req, res) {
  const todos = await Funcionario.findAll();

  res.json(todos);
}

async function altera(req, res) {
  const fun = await Funcionario.findOne({
    where: { id: req.body.id },
  });

  fun.nome = req.body.nome;

  fun.salario= req.body.salario;

  await fun.save();

  res.json(fun);
}

async function exclui(req, res) {
  const fun = await Funcionario.findOne({
    where: { id: req.params.id },
  });

  await fun.destroy();

  res.json(fun);
}

export { novo, todos, um, altera, exclui };
