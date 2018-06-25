var express = require('express');
var router = express.Router();

var sign_up_controller = require('../controllers/signUpController');
var login_controller = require('../controllers/logInController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  next()
}, function(req, res) {
  router.get('/signup', sign_up_controller.sign_up);
  router.get('/login', login_controller.log_in);
});

module.exports = router;
