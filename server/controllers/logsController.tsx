import * as logsModel from "../models/logsModel";

export async function getAllLogs(req, res) {
  const logs = await logsModel.getAllLogs();
  res.json({ success: true, payload: logs });
}
