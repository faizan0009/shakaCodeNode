var signupModel = require('../models/signup.model');

const express = require('express');
const router = express.Router();


router.post('/', 
  function(req, res) {
    //   signupModel.signUp
    console.log(req);
  });