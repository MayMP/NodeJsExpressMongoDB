require("./app/models/index");

const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const http		    = require('http');
const port 		    = 8080;
const socketIO    = require('socket.io');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

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

// For socket.io
const server  = http.Server(app);
const io      = socketIO(server);
app.set('io', io);

server.listen(port, function(err){
  if(!err)
    console.log('Listening on port ' + port);
  else console.log(err)
});

module.exports = app;