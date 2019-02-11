//jshint esversion:6

var mongoose = require('mongoose'),
  Stores = mongoose.model('Stores');

//       /Stores REQUESTS

exports.list_all = function(req, res) {
  Stores.find(function(err, list) {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  });
};

exports.delete_all = function(req, res) {
  Stores.deleteMany({}, function(err, list) {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  });
};

exports.create_new = function(req, res) {

  const newStore = new Stores({
    name: req.body.name,
    budget: req.body.budget
  });
  newStore.save();
  res.send(newStore);
};





exports.update_one = function(req, res) {

  newStore = Stores.update({
      _id: req.params.storeId
    }, {
      name: req.body.name,
      budget: req.body.budget
    }, {
      overwrite: true
    },
    function(err) {
      if (!err) {
        res.send(newStore);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );

};

exports.patch_one = function(req, res) {
  newStore = Stores.update({
      _id: req.params.storeId
    }, {
      $set: req.body
    },
    function(err) {
      if (!err) {
        res.send(newStore);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
};

exports.delete_one = function(req, res) {
  newStore = Stores.deleteOne({
      _id: req.params.storeId
    },
    function(err) {
      if (!err) {
        res.send(newStore)
      } else {
        res.send(err);
        console.log(err);
      }
    }
  );
};

exports.find_one = function(req, res) {
  newStore = Stores.findOne({
    _id: req.params.storeId
  }, function(err,data) {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
      console.log(err);
    }
  });
};