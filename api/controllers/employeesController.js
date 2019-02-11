//jshint esversion:6

var mongoose = require('mongoose'),
  Employees = mongoose.model('Employees');

//       /employees REQUESTS

exports.list_all = function(req, res) {
  Employees.find({"storeId":req.params.storeId},function(err, list) {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  });
}


exports.delete_all = function(req, res) {
  Employees.deleteMany({}, function(err, list) {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  });
};

exports.create_new = function(req, res) {

  const newEmployee = new Employees({
    name: req.body.name,
    age: req.body.age,
    salary: req.body.salary,
    dateOfEmployment: req.body.dateOfEmployment,
    storeId: req.body.storeId
  });
  newEmployee.save();
  res.send(newEmployee);
};





exports.update_one = function(req, res) {

  newEmployee = Employees.update({
      name: req.params.employeeId
    }, {
      name: req.body.name,
      age: req.body.age,
      gender: req.body.salary,
      description: req.body.dateOfEmployment
    }, {
      overwrite: true
    },
    function(err) {
      if (!err) {
        res.send(newEmploye);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );

};

exports.patch_one = function(req, res) {
  newEmployee = Employees.update({
      name: req.params.employeeId
    }, {
      $set: req.body
    },
    function(err) {
      if (!err) {
        res.send(newEmployee);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
};

exports.delete_one = function(req, res) {
  newEmployee = Employees.deleteOne({
      name: req.params.employeeId
    },
    function(err) {
      if (!err) {
        res.send(newEmployee)
      } else {
        res.send(err)
        console.log(err)
      }
    }
  )
}