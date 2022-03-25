var express = require("express");
const db = require("../db");

var router = express.Router();
const pgClient = db.getDb();

const SUPPLIER = "Supplier";
const DESIGNER = "Designer";

/* GET users listing. */
router.get("/", function (req, res, next) {
  pgClient.query('SELECT * FROM "User"', function (err, results) {
    if (err) {
      res.status(500).json(err.message);
    } else {
      res.status(200).json(results.rows);
    }
  });
});

// POST a new user (i.e. Create/Register a user).
router.post("/", function (req, res, next) {
  const { name, email, password, role, is_active, discipline, position } = req.body;
  // Verify that the email has not already been registered
  pgClient.query('SELECT EXISTS (SELECT 1 FROM "User" WHERE email=$1)', [email], function (err, results) {
    if (err) {
      res.status(500).send(err.message);
    } else if (results.rows[0].exists) {
      res.status(400).send("User email already exists");
    } else {
      // Add user to Supplier or Designer table based on their role
      if (role === SUPPLIER) {
        pgClient.query(
          'INSERT INTO "Supplier" (name, email, password, role, is_active, discipline, position, is_approved) ' +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
          [name, email, password, role, is_active, discipline, position, req.body.is_approved],
          function (err, results) {
            if (err) {
              res.status(500).send(err.message);
            } else {
              res.status(201).send("Supplier registered!");
            }
          }
        );
      } else if (role === DESIGNER) {
        pgClient.query(
          'INSERT INTO "Designer" (name, email, password, role, is_active, discipline, position, design_program, experience) ' +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
          [name, email, password, role, is_active, discipline, position, req.body.design_program, req.body.experience],
          function (err, results) {
            if (err) {
              res.status(500).send(err.message);
            } else {
              res.status(201).send("Designer registered!");
            }
          }
        );
      } else {
        res.status(400).send("The user role must be Supplier or Designer");
      }
    }
  });
});

module.exports = router;
