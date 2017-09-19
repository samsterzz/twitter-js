const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  var tweets = tweetBank.find( {id: id} );
  res.render( 'index', { title: 'twitter', tweets: tweets } );
});

module.exports = router;
