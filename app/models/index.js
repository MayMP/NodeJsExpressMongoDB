"use strict"

var mongoose   = require("mongoose");
var path       = require('path');
var env        = process.env.NODE_ENV || "development";
var config     = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

mongoose.connect("mongodb://"+config.host+":"+config.port+"/"+config.database, { useNewUrlParser: true }, (err) => {
  if(!err) 
    console.log( " MongoDB Connection Succeeded " );
  else
    console.log( " Error in DB connection : " + err );
});

require("./post.Model");