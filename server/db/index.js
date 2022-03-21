const { Client } = require("pg");
require("dotenv").config();

var _db;
const pgClient = new Client({
  host: process.env.DB_URL,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  connectToServer: async function (callback) {
    pgClient.connect(function (err) {
      return callback(err);
    });

    console.log("PostgreSQL database connected");
    _db = pgClient;
  },

  getDb: function () {
    return _db;
  },
};
