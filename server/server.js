// Server
import express from "express";
import pkg from "pg";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { logsRoutes } from "./routes/logsRoutes.js";

const { Pool } = pkg;

const app = express();
const port = process.env.REACT_APP_PORT;
const connectionString = process.env.REACT_APP_DB_STRING;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors());

app.use("/api/logs", logsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
