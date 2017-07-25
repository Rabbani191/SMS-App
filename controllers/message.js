var models = require ('../models');
var underscore= require('underscore');
var q = require ('q');

var message = {

  create : function (params){
    var d = q.defer();
    var message = underscore._.pick(params, ['subject', 'text', 'contacts', 'sentStatus']);
    console.log ('message',message);

    new models.message(message).save(function(err, data) {
      if (err) {
        console.log(err);
        return d.reject(err);
      } else {
        return d.resolve(data);
      }
    });
    return d.promise;
  },

  read   : function (){
    var d = q.defer();
    models.message.find(function(err, urls) {
      if (err){
        q.reject(err);
        }
      else {
        q.resolve(urls);
        // res.json(urls);
       }
    });

    return d.promise;
  },

  delete : function (params){

    var d = q.defer();
    var messageId = underscore._.pick(params, ['_id']);
    models.message.findById(messageId, function(err, message) {
      if (err) {
        console.log(err);
        return d.reject(err);
       }
      else {
        message.remove();
        d.resolve(departmentUpdate);
       }
    });
  },

  update : function (id, params){

    var d = q.defer();
    var updateMessage = underscore._.pick(params, ['subject', 'text', 'contacts', 'sentStatus']);
    console.log ('message',message);

    models.message.findById(id, function (err,message ) {
        if (err)
          d.reject(err);
        else{
          message.text = updateMessage.text;
          message.subject = updateMessage.subject;
          message.contacts = updateMessage.contacts;
          message.sentStatus = updateMessage.sentStatus;
          message.dateCreated = date.now;
          message.save(function (err, newUpdatedMessage) {
            if (err)
              d.reject (err);
            else {
              d.resolve(newUpdatedMessage);
            }

            });
          }

      });
    return d.promise

  }


}

 module.exports = message;
