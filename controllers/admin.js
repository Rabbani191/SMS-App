var models = require ('../models');
var underscore= require('underscore');
var q = require ('q');

var admin = {
  read: function (params){
    var d = q.defer();
    var user = underscore._.pick(params, ['admin', 'pass']);
    console.log ('user',user);

    models.admin.findOne({
      userName: user.admin ,
      password :user.pass
      }, function(err, response) {
        if (err){
          return d.reject(err);
         }
        else {
           if (response === null){ 
             console.log ('here');
             d.reject ('No user found');}
           else{
             console.log ('response', response);
             d.resolve (response); }
         }
      });

    return d.promise;
    }
 }

 module.exports = {
   controller : admin
 };
