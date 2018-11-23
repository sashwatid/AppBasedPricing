var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var Book = require('../models/Book.js');

/* GET ALL BOOKS */
router.get('/api', function(req, res, next) {
  alert("alsdksaldfk");
//  Book.find(function (err, products) {
  //  if (err) return next(err);
  //  res.json(products);
//  });
});

router.get('/', function(req, res, next) {
  alert("alsdksaldfk");
//  Book.find(function (err, products) {
  //  if (err) return next(err);
  //  res.json(products);
//  });
});

/* SAVE BOOK */
router.post('/api', function(req, res) {
  alert("finalyy");
//  Book.create(req.body, function (err, post) {
  //  if (err) return next(err);
  //  res.json(post);
//  });
});

router.post('/api', function(req, res, next) {
  alert("finalyy");
  //Book.create(req.body, function (err, post) {
  //  if (err) return next(err);
  //  res.json(post);
  //});
});
router.post('/', function(req, res) {
  alert("finalyy");
//  Book.create(req.body, function (err, post) {
  //  if (err) return next(err);
  //  res.json(post);
//  });
});

router.post('/', function(req, res, next) {
  alert("finalyy");
  //Book.create(req.body, function (err, post) {
  //  if (err) return next(err);
  //  res.json(post);
//  });
});


module.exports = router;
