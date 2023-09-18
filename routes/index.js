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
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

// GET New message page
router.get('/new', function(req, res, next) {
  res.render('form');
});

// POST New message page
router.post('/new', function(req, res, next) {
  if (req.body.message !== '') {
    messages.push({
      text: req.body.message,
      user: req.body.name || "Anonymous",
      added: new Date().toLocaleTimeString()
    });
  }
  res.redirect('/');
});

module.exports = router;
