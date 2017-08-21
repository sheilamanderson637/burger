// Require ORM
// ==================================================

var orm = require('../config/orm.js');

// Create the burger object
// ==================================================
var burger = {

// Select all burger table entries
// ==================================================
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    });
  },

// Insert a new burger into the table in the DB
// ===================================================
  create: function(cols, vals, cb) {
    orm.create('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

// Update a burger status in the table when it is "devoured"
// =====================================================
  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
