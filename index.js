TODO: criando servidor
const express = require('express');
const server = express();

//https://localhost:3000/hello?nome=Daniel&idadde=36
//Query params = ?nome=Daniel&idade=36

server.get('/hello', (req, res) => {
const {nome, idade}= req.query

return res.json({
  title: 'Express Server',
  message: `Hello,${nome}`,
  idade: idade

});
});

//https://localhost:3000/hello/Daniel
//Route params =/hello/:nome
 server.get("/hello/:nome",(req, res)=>{
  const nome = req.params.nome;

  return res.json({
    title: 'Express Server',
    message: `Hello,${nome}`,
  })
 })

server.listen(3000);