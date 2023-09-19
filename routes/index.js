const express = require('express');
const router = express.Router();
const Message = require("../models/message");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Message.find()
  res.render('index', { title: 'Mini MessageBoard', messages: messages });
});

// GET New message page
router.get('/new', function(req, res, next) {
  res.render('form');
});

// POST New message page
router.post('/new', async function(req, res, next) {

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
