import Sequelize from 'sequelize';
import databaseCongig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];

const connection = new Sequelize(databaseCongig);

models.forEach((model) => model.init(connection));
