// Express Routes for Database

import express from "express";

import * as logsController from "../controllers/logsController.js";

export const logsRoutes = express.Router();

logsRoutes.get("/", logsController.getAllLogs);

logsRoutes.post("/", logsController.enterLog);
