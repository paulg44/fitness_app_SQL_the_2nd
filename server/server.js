// Server

const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT;

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
