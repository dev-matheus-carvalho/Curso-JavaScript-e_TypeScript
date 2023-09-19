import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Ortiz',
      email: 'maria@gmail.com',
      idade: 19,
      peso: 57,
      altura: 1.59,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
