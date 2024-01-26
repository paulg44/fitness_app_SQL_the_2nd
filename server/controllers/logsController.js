import * as logsModel from "../models/logsModel.js";

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
