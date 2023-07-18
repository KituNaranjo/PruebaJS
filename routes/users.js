const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });

  user.save()
    .then(() => {
      res.status(200).json({ message: 'Usuario registrado correctamente' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al registrar el usuario' });
    });
});

router.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al recuperar usuario' });
    });
});

router.put('/disable/:userId', (req, res) => {
  const { userId } = req.params;

  User.findByIdAndUpdate(userId, { disabled: true })
    .then(() => {
      res.status(200).json({ message: 'Usuario desabilitado' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al desabilitar el usuario' });
    });
});

module.exports = router;
