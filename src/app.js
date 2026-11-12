import express from 'express';
import { cifrar, decifrar } from './vernam.js';
import { openapiSpec, swaggerPage } from './swagger.js';

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando! Documentação: <a href="/api-docs">/api-docs</a>');
});

app.get('/api-docs', (req, res) => {
  res.type('html').send(swaggerPage);
});

app.get('/api-docs/openapi.json', (req, res) => {
  res.json(openapiSpec);
});

app.post('/cifrar', (req, res) => {
  const { textoClaro, chave } = req.body;

  const textoCifrado = cifrar(textoClaro, chave);

  res.status(200).json({ textoCifrado });
});

app.post('/decifrar', (req, res) => {
  const { textoCifrado, chave } = req.body;

  const textoDecifrado = decifrar(textoCifrado, chave);

  res.status(200).json({ textoDecifrado });
});