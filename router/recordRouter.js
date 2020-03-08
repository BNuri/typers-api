import express from "express";
import { getRecords, createRecord } from "../controller/recordsController";

const router = express.Router();

router.get("/", getRecords);
router.post("/:id", createRecord);

export default router;
