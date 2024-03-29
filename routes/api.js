var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var errorMsg = "Authentication failed. Please provide valid email id / password";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});

router.post('/signup', function(req, res) {
  //  res.send('Express RESTful API');
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
    // save the user
    newUser.save(function(err) {
    if (err) {
      return res.json({success: false, msg: 'Username already exists.'});
    }
    res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});

router.post('/signin', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: errorMsg});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), config.secret);
            console.log(user.username);
            res.json({success: true, token: 'JWT ' + token, username: user.username});
        } else {
          res.status(401).send({success: false, msg: errorMsg});
        }
      });
    }
  });
});

router.get('/dashboard', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
      res.json({success: true, user: req.user.username});
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


module.exports = router;
