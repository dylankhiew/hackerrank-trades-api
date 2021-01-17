var express = require('express');
const app = require('../app.js');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "db.trades";

let db = new sqlite3.Database(DBSOURCE);

//import Trade from './models/trades';
//var sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database(':memory:', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Datas</p>');
});

module.exports = router;
