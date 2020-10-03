var express = require('express');
const app = express();
const cors = require('cors');
const port = '3333';
const { Produto } = require('./database/Database');
require('./database/Database');
const ProdutoController = require('./src/controllers/produtoController');
const ProdutoRouter = require('./src/routes/produtoRoutes')



app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Produto.create({ item: 'Xioami redmi 8', quantidade: 5, valor: 899.99});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
/*app.get('/users', (req, res) => {
  res.send('Users!');
});*/
app.use('/produtos', ProdutoRouter);

//app.listen(3000)
app.listen(port, function () {
  console.log(`app listening on port http://localhost:${port}`)
});
