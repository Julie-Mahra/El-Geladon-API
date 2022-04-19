/*Controladores de busca (todas as paletas/por Id), que dá acesso ao Service  */
const paletasService = require('../services/paleta.Service');

/*Busca lista completa de paletas disponíveis */
const findAllPaletasController = (req, res) => {
    const paletas = paletasService.findAllPaletasService();
    res.send(paletas);
};
/*Busca paletas pelo id de acordo com a pesquisa por parâmetro*/
const findByIdPaletaController = (req, res) => {
    const parametroId = Number(req.params.id);
    const escolhaPaleta = paletasService.findByIdPaletaService(parametroId);
    res.send(escolhaPaleta);
};
/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
    findAllPaletasController,
    findByIdPaletaController,
}
