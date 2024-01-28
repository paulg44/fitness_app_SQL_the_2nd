// Logs model to interact with database

import { pool } from "../server.js";

// Retrieve logs from database
export async function getAllLogs() {
  const client = await pool.connect();
  const getAllLogs = await client.query("SELECT * FROM testlogs");
  client.release();
  return getAllLogs;
}

// Add a log to database
export async function enterLog(body) {
  const { date, distance, duration, pace, surface, description } = body;
  const client = await pool.connect();
  const addLog = await client.query(
    "INSERT INTO testlogs ( date, distance, duration, pace, surface, description) VALUES ($1, $2, $3, $4, $5, $6)",
    [date, distance, duration, pace, surface, description]
  );
  // I had to release the client otherwise I had too many requests
  client.release();
  return addLog;
}

// Delete a record from database
export async function deleteEntry(id) {
  const client = await pool.connect();
  const deleteEntry = await client.query("DELETE FROM testlogs WHERE id = $1", [
    id,
  ]);
  return deleteEntry;
}
