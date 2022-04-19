/*Rotas de acesso à todas as paletas, enviando para o Controller*/
const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.Controller');

/*Rota para busca de todas as paletas*/
route.get('/todas-paletas', controllerPaletas.findAllPaletasController);
/*Rota de busca de paletas pelo ID*/
route.get('/paleta/:id', controllerPaletas.findByIdPaletaController);

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = route;

