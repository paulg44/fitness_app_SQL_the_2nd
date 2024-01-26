// Logs model to interact with database

import { pool } from "../server.js";

export async function getAllLogs() {
  const client = await pool.connect();
  const getAllLogs = await client.query("SELECT * FROM testlogs");
  return getAllLogs;
}
