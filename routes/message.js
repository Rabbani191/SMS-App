var controller = require ('../controllers/');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res ){
  controller.message.create(req.body)
  .then(function(result) {
   res.status(200).send(result);
  }
  ,function(err){
   res.status(500).send(err);
  }
  );

});

router.get('/', function(req, res ){
  res.send({'hi':'hasaan Gillo'});
  // controller.message.read()
  // .then(function(result) {
  //  res.status(200).json(result);
  // }
  // ,function(err){
  //  res.status(500).send(err);
  // }
  // );

});

router.delete('/:id', function(req, res ){
  controller.message.delete(req.params.id)
  .then(function(result) {
   res.status(200).send(result);
  }
  ,function(err){
   res.status(500).send(err);
  }
  );

});

router.put('/:id', function(req, res ){
  controller.message.update(req.params.id , req.body)
  .then(function(result) {
   res.status(200).send(result);
  }
  ,function(err){
   res.status(500).send(err);
  }
  );

});


module.exports = router;




// var express = require('express');
// var controller = require('../controllers');
// var router = express.Router();
//
// router.get('/', users.list);
//
// module.exports = router;
