//jshint esversion:6

var mongoose = require('mongoose'),
  Stores = mongoose.model('Stores');

//       /Stores REQUESTS

exports.list_all = function (req, res) {
  Stores.find(function (err, list) {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  });
};

exports.delete_all = function (req, res) {
  Stores.deleteMany({}, function (err, list) {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  });
};

exports.create_new = function (req, res) {

  const newStore = new Stores({
    name: req.body.name,
    budget: req.body.budget
  });
  // todo return value only on success @save
  newStore.save();
  res.send(newStore);
};





exports.update_one = function (req, res) {
  // TODO 

  // 2. foreach field of the document check if it exists
  //   in request body, if so overwrite it
  // 3. save the document.
  Stores.findOne({
    _id: req.params.storeId
  }, function (err, store) {
    if (!err) {
      if (req.body.hasOwnProperty('name')) store.name = req.body.name;
      if (req.body.hasOwnProperty('budget')) store.budget = req.body.budget;
      store.save(function (err, data) {
        if (!err) {
          res.send(store);
        }
        else {
          res.send(err);
        }
      })
      // res.send(list);
    } else {
      res.send(err);
    }
  });

  // Stores.update({
  //   _id: req.params.storeId
  // }, {
  //     name:,
  //     budget: req.body.budget
  //   }, {
  //     overwrite: true
  //   },
  //   function (err, newStore) {
  //     if (!err) {
  //       res.send(newStore);
  //     } else {
  //       console.log(err);
  //       res.send(err);
  //     }
  //   }
  // );

};

exports.patch_one = function (req, res) {
  Stores.update({
    _id: req.params.storeId
  }, {
      $set: req.body
    },
    function (err, newStore) {
      if (!err) {
        res.send(newStore);
      } else {
        console.log(err);
        res.send(err);
      }
    }
  );
};

exports.delete_one = function (req, res) {
  Stores.deleteOne({
    _id: req.params.storeId
  },
    function (err, newStore) {
      if (!err) {
        res.send(newStore)
      } else {
        res.send(err);
        console.log(err);
      }
    }
  );
};

exports.find_one = function (req, res) {
  Stores.findOne({
    _id: req.params.storeId
  }, function (err, data) {
    if (!err) {
      res.send(data);
    } else {
      res.send(err);
      console.log(err);
    }
  });
};