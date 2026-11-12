import express from 'express';

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem vindo ao algoritmo de Verman-Cugler!');
});

app.post('/data', (req, res) => {
    const data = req.body;
    // Process the data as needed
    res.status(200).json({ message: 'Dados recebidos com sucesso', data });
});