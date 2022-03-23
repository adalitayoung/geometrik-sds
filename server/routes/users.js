var express = require("express");
const db = require("../db");

var router = express.Router();
const pgClient = db.getDb();

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
  const { firstName, lastName, email, password, role, designProgram, position, yearsOfExperience } = req.body;

  // Verify that the email has not already been registered
  pgClient.query('SELECT EXISTS (SELECT 1 FROM "User" WHERE email=$1)', [email], function (err, results) {
    if (err) {
      res.status(500).send(err.message);
    } else if (results.rows[0].exists) {
      res.status(400).send("User email already exists");
    } else {
      pgClient.query(
        'INSERT INTO "User" ("firstName", "lastName", email, password, role, "designProgram", "position", "yearsOfExperience") ' +
          "VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
        [
          firstName,
          lastName,
          email,
          password,
          role,
          designProgram === "" ? null : designProgram,
          position === "" ? null : position,
          yearsOfExperience === "" ? null : yearsOfExperience,
        ],
        function (err, results) {
          if (err) {
            res.status(500).send(err.message);
          } else {
            res.status(201).send("User registered!");
          }
        }
      );
    }
  });
});

module.exports = router;
