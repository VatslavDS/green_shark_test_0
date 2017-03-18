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

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    var destination_file = './public/uploads/' + mom().unix();
    console.log(destination_file);
    if (!fs.existsSync(destination_file)){
            fs.mkdirSync(destination_file);
    }
        callback(null, destination_file);
  },
  fileFilter: function (req, file, cb) {
    if (path.extension(file.originalname) !== '.pdf') {
      return cb(null, false)
    }

    cb(null, true)
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
               cb(null,  raw.toString('hex')+ "_" + file.originalname );
      });
    }
  });
var upload = multer({ storage : storage }).fields([{name : "comprobante1"}, {name: "comprobante2"}, {name: "comprobante3"}, {name: "archivo_proyecto"}]);

//[{name : "comprobante1"}, {name: "omprobante2"}, {name: "comprobante3"}, {name: "archivo_proyecto"}]
module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index.swig');
});

router.get('/about', function (req, res, next) {
    res.render('about.swig');
});
router.get('/services', function (req, res, next) {
    res.render('services.swig');
});
router.get('/portfolio', function (req, res, next) {
    res.render('portfolio.swig');
});
router.get('/contact', function (req, res, next) {
    res.render('contact.swig');
});
