TODO: criando servidor
const express = require('express');
const server = express();


server.get('/', (req, res) => {
return res.json({
  title: 'Express Server',
  message: 'Hello, World!',

});
});


server.listen(3000);