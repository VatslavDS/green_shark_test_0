var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  multer = require('multer'),
  path = require('path'),
  fs = require('fs'),
  mime = require('mime'),
  crypto = require('crypto'),
  mom = require('moment'),
  q = require('q'),
  Request = mongoose.model('Request');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.get('/about', function (req, res, next) {
    res.render('about.html');
});
router.get('/services', function (req, res, next) {
    res.render('services.html');
});
router.get('/portfolio', function (req, res, next) {
    res.render('portfolio.html');
});
router.get('/contact', function (req, res, next) {
    res.render('contact.html');
});
