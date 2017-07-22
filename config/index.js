var mongoose  = require('mongoose');

var config ={
  initDb : function (){

    var db = "mongodb://" + "127.0.0.1"+ ":" + "27017 " + "/" + "SMS";
    var connectionObj = mongoose.connect (db);
    mongoose.connection.on('connected', function () {
      console.log('Mongoose default connection open to ' + db);
    });
  }
}
module.exports = config;
