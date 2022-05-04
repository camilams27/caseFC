//importando e executando-o para utilizar as variaveis de ambiente
require('dotenv').config()

//importando o express
const express = require('express');

const routes = require('./routes')
const connectDatabase = require('./database')

connectDatabase();

//para rodar a aplicação
const app = express();
const port = 3333;

app.use(express.json())
app.use(routes);

//param.- porta que está ouvindo e uma função quando a porta for acessível
app.listen(port, ()=>{ console.log(`acesse: http://localhost:${port}`)});
