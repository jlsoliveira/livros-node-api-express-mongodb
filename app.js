import express from "express";
import db from "./src/config/dbConfig.js";
import routes from "./src/routes/index.js";

//Caso de algum erro na conexão com o banco de dados mostra a msg
db.on("error", console.log.bind(console, 'Erro de conexão'));

//Se tudo ocorrer bem com a conexão com o banco de dados mostra a msg
db.once('open', function() {
  console.log('Conectado ao banco de dados produtosdb MongoDB.');
});

//cria uma estençao do express
const app = express();

//recebe um json
app.use(express.json());

//chama as rotas passando o parametro
routes(app)

export default app;