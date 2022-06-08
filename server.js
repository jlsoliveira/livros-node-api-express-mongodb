import app from "./app.js";
//se não for passado uma porta ele usará a porta 3000
const port = process.env.PORT || 3000;

//Escuta a porta 3000
app.listen(port, () =>{
  console.log(`Servido escutando em http://localhost:${port}`);
})