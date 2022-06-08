import express from "express";
import AutorController from "../controlers/autorController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarAutores)
  .get("/autores/:id", AutorController.listarAutoresId)
  .post("/autores", AutorController.cadastrarAutores)
  .put("/autores/:id", AutorController.atualizaAutores)
  .delete("/autores/:id", AutorController.deletaAutores);

export default router;