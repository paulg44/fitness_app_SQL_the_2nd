// Logs model to interact with database

import { pool } from "../server";

export async function getAllLogs() {
  const getAllLogs = await pool.query("SELECT * FROM testlogs");
  return [getAllLogs];
}
