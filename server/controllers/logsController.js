import * as logsModel from "../models/logsModel.js";

// Retrieve all logs from the database
export async function getAllLogs(req, res) {
  try {
    const logs = await logsModel.getAllLogs();
    res.json(logs.rows);
    console.log(`Success, payload ${logs.rows}`);
  } catch (error) {
    console.error("Error executing query", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

// Enter log into database
export async function enterLog(re, res) {
  const data = req.body;
  const logs = await logsModel.enterLog(data);
  console.log(`Success, payload ${logs.rows}`);
}
