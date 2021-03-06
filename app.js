
var express    = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes= require('./routes');


var models = require ('./models');
var conn = require('./config/');

conn.initDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('',express.static('web'));
// app.use('/api', api);
app.use('/', routes);


app.listen(8082,'0.0.0.0',function(){
console.log("server is listening at port 8082");
});
