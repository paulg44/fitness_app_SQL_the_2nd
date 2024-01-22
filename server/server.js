// Server

const express = require("express");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 5001;

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors());

app.get("/api/logs", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM testlogs");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
