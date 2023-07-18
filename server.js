const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(port, () => {
      console.log('Server corriendo en el puerto ' + port);
    });
  })
  .catch((error) => {
    console.error('Error connectando a MongoDB: ' + error);
  });
