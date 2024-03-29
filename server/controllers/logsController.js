// Handle the HTTP requests

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
export async function enterLog(req, res) {
  try {
    const data = req.body;
    const logs = await logsModel.enterLog(data);
    console.log(`Success, payload ${logs.rows}`);
    res.status(200).json(logs.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete entry from table
export async function deleteEntryByID(req, res) {
  try {
    const logs = await logsModel.deleteEntry(req.params.id);
    console.log(`Success, payload: ${logs}`);
    res.status(200).json(logs.id);
  } catch (error) {
    console.error(error);
  }
}

export async function editEntryByID(req, res) {
  try {
    const logs = await logsModel.editEntry(req.params.id);
    console.log(`Success, payload ${logs.id}`);
    res.status(200).json(logs.id);
  } catch (error) {
    console.error(error);
  }
}
