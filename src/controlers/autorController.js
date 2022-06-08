import autores from "../model/Autor.js";

class AutorController {

  //Pegar todos os autores
  static listarAutores = (req, res) => { 
    autores.find((err, autores) =>{
      res.status(200).json(autores)
    });
  } 

  //Pegar autor por id
  static listarAutoresId = (req, res) => { 
    let id = req.params.id;
    autores.findById(id, (err, autores) =>{
      if (err) {
        res.status(400).send({message: `${err.message}` - `falha ao encontrar ID`})
      }else{
        res.status(200).json(autores)
      }
      
    });
  } 

  //Cadastar autor
  static cadastrarAutores = (req, res) => { 
    let autor = new autores(req.body);

    autor.save((err, autor) => {
      if (err) {
        res.status(500).send({message: `${err.message}` - `falha ao cadastrar autor`})
      }else{
        res.status(201).send(autor.toJSON());
      }
    })
  } 

  //Atualizar autor
  static atualizaAutores = (req, res) => { 
    let id = req.params.id;

    autores.findByIdAndUpdate(id, req.body, (err) => {
      if (!err) {
        res.status(200).send({message: `autor atualizado com sucesso`});
      }else{
        res.status(500).send({message: `${err.message}` - `falha ao atualizar autor`});
      }
    })
  }

  //Excluir autor
  static deletaAutores = (req, res) => {
    let id = req.params.id;
    
    autores.findByIdAndRemove(id, (err) => {
      if (!err) {
        res.status(200).send({message: `autor deletado com sucesso`});
      }else{
        res.status(500).send({message: `${err.message}` - `falha ao deletar autor`});
      }
    })
  }

}

export default AutorController;