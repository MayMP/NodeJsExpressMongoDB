var express	= require('express');
var router	= express.Router();

router.get('/post', function(req, res){
  res.send({status:200, msg:"Welcome to Post API"});
});

// For Route
router.use('/post', require('./postRoute'));

module.exports = router;