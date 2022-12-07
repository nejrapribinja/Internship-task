const { Pool } = require("pg");
var dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.dbport,
  max: 100,
  idleTimeoutMillis: 30000, // close idle clients after 1 second
  connectionTimeoutMillis: 30000,
});

module.exports = { pool };
