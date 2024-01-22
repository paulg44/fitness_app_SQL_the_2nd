// Server
import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { Pool } = pkg;

const app = express();
const port = process.env.REACT_APP_PORT;
console.log(process.env.REACT_APP_PORT);
// const port = 4000;
// const connectionString =
//   "postgres://axitdbae:1-Qur9qtBb474q2jodqWCnmYFEDnY5XJ@horton.db.elephantsql.com/axitdbae";
const connectionString = process.env.REACT_APP_DB_STRING;

const pool = new Pool({
  connectionString,
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
