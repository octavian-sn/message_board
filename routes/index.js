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
router.post('/new', async function(req, res, next) {
  const Message = require("../models/message");

  if (req.body.message !== '') {
    const newMessage = new Message({
      text: req.body.message,
      user: req.body.name || "Anonymous",
      added: new Date().toLocaleTimeString()
    })
    
    try{
      await newMessage.save();
    } catch (err){
      console.log(`Message not added, check error: \n ${err}`)
    }
  }
  res.redirect('/');
});

module.exports = router;
