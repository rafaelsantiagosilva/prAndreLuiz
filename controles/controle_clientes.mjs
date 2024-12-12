import Cliente from "../modelos/cliente.mjs";

async function novo(req, res) {
  try {
    const criado = await Cliente.create({
      nome: req.body.nome,
      idade: req.body.idade,
      CPF: req.body.CPF,
      email: req.body.email
    });

    res.json(criado);
  } catch (e) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar cliente" });
  }
}

async function um(req, res) {
  const cli = await Cliente.findOne({
    where: { id: req.params.id },
  });

  res.json(cli);
}

async function todos(req, res) {
  const todos = await Cliente.findAll();

  res.json(todos);
}

async function altera(req, res) {
  const cli = await Cliente.findOne({
    where: { id: req.body.id },
  });

  cli.nome = req.body.nome;

  cli.idade = req.body.idade;

  await cli.save();

  res.json(cli);
}

async function exclui(req, res) {
  const cli = await Cliente.findOne({
    where: { id: req.params.id },
  });

  await cli.destroy();

  res.json(cli);
}

export { novo, todos, um, altera, exclui };
