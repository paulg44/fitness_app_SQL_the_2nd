// Express Routes for Database

import express from "express";

// Routes for database POST, PUT, GET, PATCH

import * as logsController from "../controllers/logsController.js";

export const logsRoutes = express.Router();

logsRoutes.get("/", logsController.getAllLogs);

logsRoutes.post("/", logsController.enterLog);

logsRoutes.delete("/:id", logsController.deleteEntryByID);
