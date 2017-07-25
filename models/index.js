var admin= require ('./models.admin')
var message= require ('./models.message')

 module.exports = {
   admin : admin.model,
   message : message.model
 };
