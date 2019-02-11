//REQUIRE CONTROLLER

module.exports = function(app) {
  var Stores = require('../controllers/storeController');
  var Employees = require('../controllers/employeesController');

  //ROUTES FOR WHOLE LIST
  app.route("/stores")
    .get(Stores.list_all)
    .post(Stores.create_new)
    .delete(Stores.delete_all);

  //ROUTES FOR SPECIFIC STORE
  app.route("/stores/:storeId")
    .put(Stores.update_one)
    .patch(Stores.patch_one)
    .delete(Stores.delete_one)
    .get(Stores.find_one);

  app.route("/employeesByStore/:storeId")
    .get(Employees.list_all);
};

