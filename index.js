//criando servidor
const express = require('express');
const server = express();

//https://localhost:3000/hello?nome=Daniel&idadde=36
//Query params = ?nome=Daniel&idade=36

server.get('/hello', (req, res) => {
  const { nome, idade } = req.query;

  return res.json({
    title: 'Express Server',
    message: `Hello,${nome}`,
    idade: idade,
  });
});

//https://localhost:3000/hello/Daniel
//Route params =/hello/:nome
server.get('/hello/:nome', (req, res) => {
  const nome = req.params.nome;

  return res.json({
    title: 'Express Server',
    message: `Hello,${nome}`,
  });
});

//listagem dos registros
server.use(express.json());

const customers = [
  { id: 1, name: 'Daniel', site: 'https://danielcrubens.dev' },
  { id: 2, name: 'Google', site: 'https://google.com' },
  { id: 3, name: 'Uol', site: 'https://uol.com.br' },
];
//list
server.get('/customers', (req, res) => {
  return res.json(customers);
});

//show
server.get('/customers/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const customer = customers.find((item) => item.id === id);
  const status = customer ? 200 : 404;
  return res.status(status).json(customer);
});

//create
server.post('/customers', (req, res) => {
  const { name, site } = req.body;
  const id = customers.length + 1;
  const newCustomer = { id, name, site };
  customers.push(newCustomer);
  return res.status(201).json(newCustomer);
});

//update
server.put('/customers/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const { name, site } = req.body;
  const customerIndex = customers.findIndex((item) => item.id === id);
  const status = customerIndex >= 0 ? 200 : 404;
  if (customerIndex >= 0) {
    customers[customerIndex] = { id: Number.parseInt(id), name, site };
  }
  return res.status(status).json(customers[customerIndex]);
});

//delete
server.delete('/customers/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const customerIndex = customers.findIndex((item) => item.id === id);
  const status = customerIndex >= 0 ? 204 : 404;
  if (customerIndex >= 0) {
    customers.splice(customerIndex, 1);
  }
  return res.status(status).json();
});

server.listen(3000);