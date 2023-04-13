const express = require('express');
const app = express();

/* const Sequelize = require('sequelize');
const sequelize = new Sequelize(require('./config.json').development);
const NOME_DO_MODELO = sequelize.import('./models/NOME_DO_MODELO');

app.get('/', (req, res) => {
  NOME_DO_MODELO.findAll().then(results => {
    res.json(results);
  });
}); */

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
