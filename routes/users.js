const express = require('express');
const router = express.Router();
var signupModel = require('../models/signup.model');
const passport = require('passport');
var Strategy = require('passport-local').Strategy;
var userModel = require('../models/user.model');
var fetchUsers = require("../models/fetchusers.model");

const usersController = require('../controllers/users.controller');


router.get('/', usersController.index);
router.post('/signup', 
  function(req, res) {
      signupModel.signUp(req.body.username, req.body.password, req.body.userType, function(err, user)
    {
        if (err) {
            res.status(404).json(err);
            return;
          }

          if (user) {
            res.status(200);
            res.json({
              message: user
            });
            return res;
          }
    })
  });

  router.post('/edit', 
  function(req, res) {
      signupModel.edit(req.body.username, req.body.password, req.body.userType, req.body.id, function(err, user)
    {
        if (err) {
            res.status(404).json(err);
            return;
          }

          if (user) {
            res.status(200);
            res.json({
              message: user
            });
            return res;
          }
    })
  });


  router.post('/delete', 
  function(req, res) {
      userModel.delete(req.body.id, function(err, msg)
    {
        if (err) {
            res.status(404).json(err);
            return;
          }

          if (msg) {
            res.status(200);
            res.json({
              message: msg
            });
            return res;
          }
    })
  });

  passport.use(new Strategy(
    function(email, password, cb) {
      userModel.findByUsername(email, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));




router.post('/login', 
  function(req, res) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
          res.status(404).json(err);
          return;
        }
    
        if (user) {
          res.status(200);
          res.json({
            userInfo: user
          });
        } else {
          res.status(401).json(info);
        }
      })(req, res);
  });
  


  router.get('/fetchusers', 
  function(req, res) {
      fetchUsers.fetch(function(err, user)
    {
        if (err) {
            res.status(404).json(err);
            return;
          }

          if (user) {
            res.status(200);
            res.json({
              users: user
            });
            return res;
          }
    })
  });


module.exports = router;
