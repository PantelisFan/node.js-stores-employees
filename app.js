var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  Employees = require('./api/models/employeesModel'), //created model loading here
  Stores = require('./api/models/storeModel')

cors = require('cors');
app.use(cors());

bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/employeesDB', {
  useNewUrlParser: true
}, function() {
  console.log("MongoDB Connected!");
});


var routes = require('./api/routes/employeesRoutes'); //importing route
routes(app); //register the route

var storeRoutes = require('./api/routes/storeRoutes');
storeRoutes(app);







app.listen(3000, function() {
  console.log("Connected successfully, Listening on port 3000");
});