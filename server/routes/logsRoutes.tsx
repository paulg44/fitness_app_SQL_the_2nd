// Express Routes for Database

import express from "express";

import * as logsController from "../controllers/logsController";

const logsRoutes = express.Router();
export default logsRoutes;

logsRoutes.get("/", logsController.getAllLogs);
