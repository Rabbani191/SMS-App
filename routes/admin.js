var controller = require ('../controllers/');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res ){
  // res.send({hello:'hassan'});

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




// var express = require('express');
// var controller = require('../controllers');
// var router = express.Router();
//
// router.get('/', users.list);
//
// module.exports = router;
