// Logs model to interact with database

import { pool } from "../server.js";

// Retrieve logs from database
export async function getAllLogs() {
  const client = await pool.connect();
  const getAllLogs = await client.query("SELECT * FROM testlogs");
  return getAllLogs;
}

// Add a log to database
export async function enterLog() {
  const client = await pool.connect();
  const addLog = await client.query(
    "INSERT INTO testlogs (date, distance, duration, pace, surface, description) VALUES ($1, %2, $3, $4, $5, $6"
  );
  return addLog;
}
