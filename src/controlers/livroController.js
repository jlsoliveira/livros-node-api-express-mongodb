import livros from "../model/Livro.js";

class LivroController {
  
  //Pegar todos os livros sem relacao de tabelas
  // static listarLivros = (req, res) => { 
  //   livros.find((err, livros) =>{
  //     res.status(200).json(livros)
  //   });
  // } 

  //Pegar todos os livros com relacao de tabelas
  static listarLivros = (req, res) => { 
    livros.find()
    .populate('autor')
    .exec((err, livros) =>{
      res.status(200).json(livros)
    });
  } 

  //Pegar livro por id sem relacao de tabelas
  // static listarLivroId = (req, res) => { 
  //   let id = req.params.id;
  //   livros.findById(id, (err, livros) =>{
  //     if (err) {
  //       res.status(400).send({message: `${err.message}` - `falha ao encontrar ID`})
  //     }else{
  //       res.status(200).json(livros)
  //     }
  //   });
  // } 

  //Pegar livro por id com relacao de tabelas, mostrando apenas o campo nome do autor
  static listarLivroId = (req, res) => { 
    let id = req.params.id;
    livros.findById(id)
    .populate('autor', 'nome')
    .exec((err, livros) =>{
      if (err) {
        res.status(400).send({message: `${err.message}` - `falha ao encontrar ID`})
      }else{
        res.status(200).json(livros)
      }
    });
  } 

  //Crear livro
  static cadastrarLivros = (req, res) => { 
    let livro = new livros(req.body);

    livro.save((err, livro) => {
      if (err) {
        res.status(500).send({message: `${err.message}` - `falha ao cadastrar livro`})
      }else{
        res.status(201).send(livro.toJSON());
      }
    })
  } 

  //Atualizar livro
  static atualizaLivros = (req, res) => { 
    let id = req.params.id;

    livros.findByIdAndUpdate(id, req.body, (err) => {
      if (!err) {
        res.status(200).send({message: `livro atualizado com sucesso`});
      }else{
        res.status(500).send({message: `${err.message}` - `falha ao atualizar livro`});
      }
    })
  }

  //Excluir livro
  static deletaLivros = (req, res) => {
    let id = req.params.id;
    
    livros.findByIdAndRemove(id, (err) => {
      if (!err) {
        res.status(200).send({message: `livro deletado com sucesso`});
      }else{
        res.status(500).send({message: `${err.message}` - `falha ao deletar livro`});
      }
    })
  }

  //Pegar livro por editora
  static listarLivroEditora = (req, res) => {
    const editora = req.query.editora;
    livros.find({editora: editora},{}, (err, livros) => {
      if (err) {
        res.status(500).send({message: `${err.message}` - `falha ao listar livros`})
      }else{
        res.status(200).send(livros)
      }
    })
  }
}

export default LivroController;