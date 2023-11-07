const bcrypt = require("bcrypt");
const Cryptr = require('cryptr');
const Data = require("../models/Data");
const generator = require('generate-password');

exports.getApiIndex = (req, res) => {
  res.status(200)
  res.send({
    msg: 'hey, thanks for checking out backendFunctions api',
    data: "here's some sample data for now",
  })
  
}