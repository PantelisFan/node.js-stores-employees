//REQUIRE CONTROLLER

module.exports = function(app) {
  var Employees = require('../controllers/EmployeesController');

  //ROUTES FOR WHOLE LIST
  app.route("/employees")
    .get(Employees.list_all)
    .post(Employees.create_new)
    .delete(Employees.delete_all);

  //ROUTES FOR SPECIFIC PERSON
  app.route("/employees/:employeeID")
    .put(Employees.update_one)
    .patch(Employees.patch_one)
    .delete(Employees.delete_one);

};