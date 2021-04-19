const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const response = { name: req.query.name }
  const data = {
    code: 1,
    data: {
      name: response.name
    },
    message: `${req.query.name} is logging`
  }
  res.send(data);
});

/* POST users listing. */
router.post('/reset', function(req, res, next) {
  const response = {
    name: req.body.name,
    pass: req.body.pass
  }
  const data = {
    code: 1,
    data: {
      name: response.name,
      pass: response.pass
    },
    message: `reset ${response.name}'s password has changed to ${response.pass}`
  }
  res.send(data);
});
module.exports = router;
