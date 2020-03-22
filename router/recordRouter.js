import express from "express";
import {
  getRecords,
  createRecord,
  getRecordsById
} from "../controller/recordsController";

const router = express.Router();

router.get("/", getRecords);
router.get("/:id", getRecordsById);
router.post("/:id", createRecord);

export default router;
