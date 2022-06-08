import mongoose from "mongoose";

//Inserir a string de conexão com o banco de dados
mongoose.connect("mongodb+srv://dbLivraria:dbLivraria123@node-express.emswwsl.mongodb.net/dbLivraria" );

let db = mongoose.connection;

export default db;