var express = require('express');
const db = require("../db");

var router = express.Router();
const pgClient = db.getDb();

/* GET users listing. */
router.get("/", function (req, res, next) {
  pgClient.query('SELECT * FROM "User"', function (err, results) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(results.rows);
    }
    
  });
});

module.exports = router;
