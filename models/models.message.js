mongoose = require ('mongoose');

var messageSchema = new mongoose.Schema({
  subject:{
    type :String
  },
  text:{
    type:String
  },
  dateCreated:{
    type:Date ,
    default : Date.now
  },
  dateSent:{
    type:Date
  },
  contacts:{
    type:Object,
    default : []
  },
  sentStatus:{
    type:Number,
    default : 0
  }


});

var messageModel = mongoose.model('message',messageSchema);

module.exports = {
  model: messageModel ,
  schema: messageSchema
};
