const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Octavian",
    added: new Date().toLocaleTimeString()
  },
  {
    text: "Hello World!",
    user: "Nicu",
    added: new Date().toLocaleTimeString()
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
