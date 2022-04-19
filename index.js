const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Paleta feita com açaí Natural e super nutritivo, com recheio de Leite Condensado.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 8.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao:
      'Paleta de Banana com recheio cremoso de Nutella.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao:
      'Paleta feita com puro creme de Chocolate Belga.',
    foto: './assets/images/chocolate-belga.png',
    preco: 10.0,
  },
  {
    id: 4,
    sabor: 'Côco',
    descricao:
      'Paleta feita com Côco, sem adição de açúcar',
    foto: './assets/images/coco.png',
    preco: 8.0,
  },
  {
    id: 5,
    sabor: 'Morango com Nutella',
    descricao:
      'Paleta feita com Morango, com recheio cremoso de Nutella',
    foto: './assets/images/morango-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 6,
    sabor: 'Ninho com Ovomaltine',
    descricao:
      'Paleta feita com creme de Leite Ninho, com recheio crocante de Ovomaltine',
    foto: './assets/images/ninho-com-ovomaltine.png',
    preco: 12.0,
  },
];

//rota para acessar todas paletas//
app.get('/paletas/todas-paletas', (req, res) => {
  res.send(paletas);
});

//rota para pegar as paletas pelo Id//
app.get('/paletas/paleta/:id', (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaleta = paletas.find((paleta) => paleta.id === parametroId);
  res.send(escolhaPaleta);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
