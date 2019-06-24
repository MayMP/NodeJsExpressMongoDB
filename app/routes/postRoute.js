const express               = require("express");
const router                  = express.Router();
const mongoose              = require("mongoose");
const Post                  = mongoose.model("Post");
const handleValidationError = require("../components/helpers/validation");

// To create data
router.post('/create', async(req, res) => {
  let post          = new Post();
  post.title        = req.body.title;
  post.message      = req.body.message;
  post.status       = "active";

  let isEmpty = await handleValidationError.isEmpty(post);

  if( isEmpty.status == false ){
    post.save((err, docs) => {
      if(!err){
        res.json({
          code: 200,
          message: "Success"
        });
      }else{
        console.log( " Error in retrieving post creation : " + err );
        res.json({
          code: 500,
          data: err,
          message: "Error in retrieving post creation."
        });
      } 
    });
  }else{
    delete isEmpty["status"];
    res.json({
      code: 406,
      data: isEmpty
    });
  }
});

// To display all data
router.get('/list', (req, res) => {
  Post.find( {status: 'active'}, {status: 0}, (err, docs) => {
    if(!err){
      res.json({
        code: 200,
        data: docs,
        message: "Success"
      });
    }else{
      console.log( " Error in retrieving post list : " + err );
      res.json({
        code: 500,
        data: err,
        message: "Error in retrieving post list."
      });
    }   
  }); 
});

// To display data dealing with id
router.post('/detail', function(req, res){
  Post.findOne( {_id: req.body.id, status: "active"}, {status: 0} , (err, docs) => {
    if(!err){
      res.json({
        code: 200,
        data: (docs == null ? "N/A" : docs),
        message: (docs == null? "This post has already deleted." : "Success")
      });
    }else{
      console.log( " Error in post detail : " + err );
      res.json({
        code: 500,
        data: err,
        message: "Error in post detail."
      });
    }
  });
});

// To update data
router.post('/update', async function(req, res){
  let isEmpty = await handleValidationError.isEmpty(req.body);

  if( isEmpty.status == false ){  
    req.body.status = "active";
    Post.updateOne( {_id: req.body.id}, req.body, (err, docs) => {
      if(!err){
        res.json({
          code: 200,
          message: "Success"
        });
      }else{
        console.log( " Error in post updating : " + err );
        res.json({
          code: 500,
          data: err,
          message: "Error in post updating."
        });
      }
    });
  }else{
    delete isEmpty["status"];
    res.json({
      code: 406,
      data: isEmpty
    });
  }
});

// To delete data
router.post('/delete', function(req, res){
  Post.updateOne( {_id: req.body.id}, {status: "inactive"}, (err, docs) => {
    if(!err){
      res.json({
        code: 200,
        message: "Success"
      });
    }else{
      console.log( " Error in post deletion : " + err );
      res.json({
        code: 500,
        data: err,
        message: "Error in post deletion."
      });
    }
  });
});

module.exports = router;