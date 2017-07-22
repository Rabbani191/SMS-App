mongoose = require ('mongoose');

var adminSchema = new mongoose.Schema({
  userName:{
    type :String
  },
  password:{
    type:String
  }
});

var adminModel = mongoose.model('admin',adminSchema);

module.exports = {
  model: adminModel ,
  schema: adminSchema
};
