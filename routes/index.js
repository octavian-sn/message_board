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

// New message
router.get('/new', function(req, res, next) {
  res.render('form');
});

// Handle message submit
router.post('/new', function(req, res, next) {
  const newMessage ={
    text: req.body.message,
    user: req.body.name || "Anonymous",
    added: new Date().toLocaleTimeString()
  }
  messages.push(newMessage);
  res.render('index', { title: 'Mini MessageBoard', messages: messages });

});

module.exports = router;
