var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

// Create routes
// =======================================================
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
Console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Insert a new burger
// ======================================================
router.post('/', function(req, res) {
  burger.create([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

// Update a burger as "devoured"
// =======================================================
router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// Export routes for server.js to use
// =======================================================
module.exports = router;