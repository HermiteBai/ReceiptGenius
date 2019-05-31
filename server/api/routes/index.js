var receipts = require('../data/mockdata');
var express = require('express');
var router = express.Router();

router.use(express.json());

router.get('/', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:5000/";
  res.setHeader('Content-Type', 'application/json');

  MongoClient.connect(url, function(err, db) {
    var results;
    if (err || !db) {
      results = receipts;
      res.json({data: results});
      return;
    }
    var dbo = db.db("ReceiptGenius");
    dbo.collection("receipts").find().toArray(function(err, result) {
      if (err) {
        console.log('No data found, will use mock data instead');
      }
      res.json({data: result});
      console.log(result);
      db.close();
    });
  });
});

router.post('/', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:5000/";

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('Unable to connect to mongodb, please try again!');
    }
    var dbo = db.db("ReceiptGenius");
    var receipt = req.body;
    console.log(receipt);
    dbo.collection("receipts").save(receipt, function(err, result) {
      if (err) {
        console.log('Insert failed!');
      } else {
        console.log("1 receipt inserted");
        console.log(result);
        res.status(200).end();
      }
      db.close();
    });
  });
});

router.delete('/', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:5000/";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ReceiptGenius");
    var myquery = req.body;
    dbo.collection("receipts").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 receipt deleted");
      console.log(obj);
      db.close();
      res.status(200).end();
    });
  });
});

module.exports = router;
