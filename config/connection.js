require('dotenv').config()

const mysql = require("mysql");

module.exports = mysql

const db  = {
    host: process.env.DB_HOST,
    port: 8080,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };

  module.exports = db