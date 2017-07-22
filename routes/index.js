 var controller = require ('../controllers/');
var express = require('express');
var router = express.Router();
//
// var controllers = require('../controllers');

router.post('/', function(req, res ){

  controller.admin.read(req.body)
  .then(function(result) {
    res.status(200).send(result);
  }
  ,function(err){
    res.status(500).send(err);
   }
   );

});

module.exports = router;
