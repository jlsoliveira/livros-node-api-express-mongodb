import express from "express";
import LivroController from "../controlers/livroController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroEditora)
  .get("/livros/:id", LivroController.listarLivroId)
  .post("/livros", LivroController.cadastrarLivros)
  .put("/livros/:id", LivroController.atualizaLivros)
  .delete("/livros/:id", LivroController.deletaLivros);

export default router;