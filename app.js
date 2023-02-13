// Creating a server connection on PORT:5500 (node,Express)
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/src'));

const server = app.listen(5500, "127.0.0.1", () => {
  const serverAddress = server.address();
  console.log(`Server opened at : -> http://${serverAddress.address}:${serverAddress.port}`)
});