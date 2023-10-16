import express ,{Request, Response} from 'express';
const app = express();
const port = 3000;
app.use(express.json());

// Dados do torneio
let torneios = [
  { id: 1, nome: 'LeagueChampignon', tipo: 'Free-For-All' },
  { id: 2, nome: 'KinopioLeague', tipo: 'Equipes' },
];

app.use((req, res, next)=>{
  res.setHeader('X-Your-Name', 'Sávio');
  next();
})

// GET para buscar todos os registros
app.get('/torneios', (req: Request, res: Response) => {

  res.json(torneios);
});

// GET para buscar por ID
app.get('/torneios/:id', (req: Request, res: Response) => {
  const torneio = torneios.find(t => t.id === parseInt(req.params.id));
  if (!torneio) return res.status(404).send('Torneio não encontrado');

  res.json(torneio);
});

// POST para criar um novo registro
app.post('/torneios', (req: Request, res: Response) => {
  if (!req.body.nome || !req.body.tipo) {
    return res.status(400).send('Campos "nome" e "tipo" são obrigatórios.');
  }
  const torneio = {
    id: torneios.length + 1,
    nome: req.body.nome,
    tipo: req.body.tipo
  };
  torneios.push(torneio);

  res.json(torneio);
});

// PUT para atualizar um registro pelo ID
app.put('/torneios/:id', (req: Request, res: Response) => {
  const torneio = torneios.find(t => t.id === parseInt(req.params.id));
  if (!torneio) return res.status(404).send('Torneio não encontrado');

  if (!req.body.nome || !req.body.tipo) {
    return res.status(400).send('Campos "nome" e "tipo" são obrigatórios.');
  }

  torneio.nome = req.body.nome;
  torneio.tipo = req.body.tipo;

  res.json(torneio);
});

// Deletar um registro pelo ID
app.delete('/torneios/:id', (req: Request, res: Response) => {
  const torneio = torneios.find(t => t.id === parseInt(req.params.id));
  if (!torneio) return res.status(404).send('Torneio não encontrado');

  const index = torneios.indexOf(torneio);
  torneios.splice(index, 1);


  res.json(torneio);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
