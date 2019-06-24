require("./app/models/index");

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var port 			  = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send({status:200, msg:"Welcome to MMP API"});
});

//Routes
app.use(require('./app/routes/'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  return res.status(err.status || 500).send({success:false,status: err.status || 500, error:err.message});
});

app.listen(port, function(err){
  if(!err)
    console.log('Listening on port ' + port);
  else console.log(err)
});

module.exports = app;